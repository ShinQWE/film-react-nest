/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { Film, Schedule } from '../films/entity';
import { FilmsModule } from '../films/films.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Film, Schedule]), 
    FilmsModule,
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}