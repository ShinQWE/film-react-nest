/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Film } from './entity';

@Injectable()
export class FilmsService {
  constructor(
    @InjectRepository(Film)
    private readonly filmRepository: Repository<Film>,
  ) {}

  async findAll(): Promise<{ total: number; items: Film[] }> {
    const films = await this.filmRepository.find();
    return {
      total: films.length,
      items: films,
    };
  }

  async findOne(id: string): Promise<Film> {
    const film = await this.filmRepository.findOne({ where: { id } }); 
    if (!film) {
      throw new NotFoundException(`Фильм с ID ${id} не найден`);
    }
    return film;
  }

  async create(film: Film): Promise<Film> {
    const newFilm = this.filmRepository.create(film);
    return await this.filmRepository.save(newFilm);
  }
}