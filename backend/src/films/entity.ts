/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { EntitySchema } from 'typeorm';

/**
 * фабрика для создания схемы TypeORM на основе класса
 * Мне пришлось менять контролеры и сервисы т.к. они все имели mongoose
 */
export function SchemaFactory<T>(classRef: new () => T): EntitySchema<T> {
  return new EntitySchema<T>({
    name: classRef.name,
    target: classRef,
    columns: Reflect.getMetadata('columns', classRef) || {},
    relations: Reflect.getMetadata('relations', classRef) || {},
  });
}

@Entity('films') 
export class Film {
  @PrimaryGeneratedColumn('uuid') 
  id: string;

  @Column()
  title: string;

  @Column()
  director: string;

  @Column('float')
  rating: number;

  @Column('text')
  tags: string;

  @Column()
  image: string;

  @Column()
  cover: string;

  @Column()
  about: string;

  @Column()
  description: string;

  @OneToMany(() => Schedule, (schedule) => schedule.film)
  schedules: Schedule[];
}

@Entity('schedules') 
export class Schedule {
  @PrimaryGeneratedColumn('uuid') 
  id: string;

  @Column()
  daytime: string;

  @Column()
  hall: number;

  @Column()
  rows: number;

  @Column()
  seats: number;

  @Column()
  price: number;

  @Column('simple-array', { default: '' }) 
  taken: string[];

  @ManyToOne(() => Film, (film) => film.schedules, { onDelete: 'CASCADE' })
  film: Film;
}

export type ScheduleDocument = Schedule;
export type FilmDocument = Film;
export const FilmSchema = SchemaFactory(Film);
export const ScheduleSchema = SchemaFactory(Schedule);