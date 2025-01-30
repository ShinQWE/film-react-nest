/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Film, FilmDocument } from './film.schema';

@Injectable()
export class FilmsService {
  constructor(@InjectModel(Film.name) private filmModel: Model<FilmDocument>) {}

  async findAll(): Promise<{ total: number; items: Film[] }> {
    const films = await this.filmModel.find().lean().exec(); 
    return {
      total: films.length,
      items: films,
    };
  }

  async findOne(id: string): Promise<Film> {
    const film = await this.filmModel.findOne({ id }).lean().exec(); 
    if (!film) {
      throw new NotFoundException(`Фильм с ID ${id} не найден`);
    }
    return film;
  }

  async create(film: Film): Promise<Film> {
    const newFilm = new this.filmModel(film);
    return newFilm.save();
  }
}