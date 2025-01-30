/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './order.schema';

@Controller('/order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    const items = await this.orderService.processOrder(createOrderDto);

    return {
      total: items.length,
      items,
    };
  }
}