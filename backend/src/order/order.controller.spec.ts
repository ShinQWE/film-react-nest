/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { CreateOrderDto } from './order.schema';

describe('OrderController', () => {
  let orderController: OrderController;
  let orderService: OrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderController],
      providers: [
        {
          provide: OrderService,
          useValue: {
            processOrder: jest.fn(), // мокаем processOrder
          },
        },
      ],
    }).compile();

    orderController = module.get<OrderController>(OrderController);
    orderService = module.get<OrderService>(OrderService);
  });

  it('should be defined', () => {
    expect(orderController).toBeDefined();
  });

  describe('create', () => {
    it('should call OrderService.processOrder with correct arguments', async () => {
      const createOrderDto: CreateOrderDto = {
        email: 'test@example.com',
        phone: '+1234567890',
        tickets: [
          {
            film: 'Film 1',
            session: 'Session 1',
            row: 5,
            seat: 10,
            price: 100,
          },
          {
            film: 'Film 2',
            session: 'Session 2',
            row: 3,
            seat: 15,
            price: 150,
          },
        ],
      }; 

      const mockProcessedItems = [
        {
          film: 'Film 1',
          session: 'Session 1',
          row: 5,
          seat: 10,
          price: 100,
        },
        {
          film: 'Film 2',
          session: 'Session 2',
          row: 3,
          seat: 15,
          price: 150,
        },
      ];

      jest.spyOn(orderService, 'processOrder').mockResolvedValue(mockProcessedItems);

      const result = await orderController.create(createOrderDto);

      expect(orderService.processOrder).toHaveBeenCalledWith(createOrderDto);
      expect(result).toEqual({
        total: mockProcessedItems.length,
        items: mockProcessedItems,
      });
    });

    it('should handle empty tickets array', async () => {
      const createOrderDto: CreateOrderDto = {
        email: 'test@example.com',
        phone: '+1234567890',
        tickets: [], 
      };

      const mockProcessedItems: [] = [];

      jest.spyOn(orderService, 'processOrder').mockResolvedValue(mockProcessedItems);

      const result = await orderController.create(createOrderDto);

      expect(orderService.processOrder).toHaveBeenCalledWith(createOrderDto); 
      expect(result).toEqual({
        total: 0,
        items: [],
      }); 
    });
  });
});