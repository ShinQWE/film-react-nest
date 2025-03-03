"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prettier/prettier */
const testing_1 = require("@nestjs/testing");
const order_controller_1 = require("./order.controller");
const order_service_1 = require("./order.service");
describe('OrderController', () => {
    let orderController;
    let orderService;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        const module = yield testing_1.Test.createTestingModule({
            controllers: [order_controller_1.OrderController],
            providers: [
                {
                    provide: order_service_1.OrderService,
                    useValue: {
                        processOrder: jest.fn(), // мокаем processOrder
                    },
                },
            ],
        }).compile();
        orderController = module.get(order_controller_1.OrderController);
        orderService = module.get(order_service_1.OrderService);
    }));
    it('should be defined', () => {
        expect(orderController).toBeDefined();
    });
    describe('create', () => {
        it('should call OrderService.processOrder with correct arguments', () => __awaiter(void 0, void 0, void 0, function* () {
            const createOrderDto = {
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
            const result = yield orderController.create(createOrderDto);
            expect(orderService.processOrder).toHaveBeenCalledWith(createOrderDto);
            expect(result).toEqual({
                total: mockProcessedItems.length,
                items: mockProcessedItems,
            });
        }));
        it('should handle empty tickets array', () => __awaiter(void 0, void 0, void 0, function* () {
            const createOrderDto = {
                email: 'test@example.com',
                phone: '+1234567890',
                tickets: [],
            };
            const mockProcessedItems = [];
            jest.spyOn(orderService, 'processOrder').mockResolvedValue(mockProcessedItems);
            const result = yield orderController.create(createOrderDto);
            expect(orderService.processOrder).toHaveBeenCalledWith(createOrderDto);
            expect(result).toEqual({
                total: 0,
                items: [],
            });
        }));
    });
});
