/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Film, Schedule } from '../films/entity';
import { CreateOrderDto } from './order.schema';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Film) private readonly filmRepository: Repository<Film>,
    @InjectRepository(Schedule) private readonly scheduleRepository: Repository<Schedule>,
  ) {}

  async bookSeats(filmId: string, sessionId: string, seats: string[]): Promise<void> {
    const film = await this.filmRepository.findOne({
      where: { id: filmId }, 
      relations: ['schedules'],
    });
  
    if (!film) {
      throw new NotFoundException('Фильм не найден');
    }
  
    const schedule = film.schedules.find((s) => s.id === sessionId); 
  
    if (!schedule) {
      throw new NotFoundException('Сеанс не найден');
    }
  
    const occupiedSeats = new Set(schedule.taken || []);
  
    for (const seat of seats) {
      if (occupiedSeats.has(seat)) {
        throw new BadRequestException(`Место ${seat} уже забронировано`);
      }
      occupiedSeats.add(seat);
    }
  
    schedule.taken = Array.from(occupiedSeats);
  
    await this.scheduleRepository.save(schedule);
  }

  async processOrder(order: CreateOrderDto): Promise<any[]> {
    const results = [];
  
    for (const ticket of order.tickets) {
      const filmId = ticket.film; 
      const sessionId = ticket.session; 
  
      if (!filmId || !sessionId) {
        throw new BadRequestException('Некорректные данные для film или session');
      }
  
      await this.bookSeats(filmId, sessionId, [`${ticket.row}-${ticket.seat}`]);
  
      results.push({
        film: ticket.film,
        session: ticket.session,
        row: ticket.row,
        seat: ticket.seat,
        price: ticket.price,
        daytime: new Date().toISOString(),
      });
    }
  
    return results;
  }
}