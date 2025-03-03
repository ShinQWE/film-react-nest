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
const films_controller_1 = require("./films.controller");
const films_service_1 = require("./films.service");
const common_1 = require("@nestjs/common");
describe('FilmsController', () => {
    let controller;
    let service;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        const module = yield testing_1.Test.createTestingModule({
            controllers: [films_controller_1.FilmsController],
            providers: [
                {
                    provide: films_service_1.FilmsService,
                    useValue: {
                        findAll: jest.fn().mockResolvedValue({ total: 2, items: [] }),
                        findOne: jest.fn(),
                        create: jest.fn(),
                    },
                },
            ],
        }).compile();
        controller = module.get(films_controller_1.FilmsController);
        service = module.get(films_service_1.FilmsService);
    }));
    describe('findAll', () => {
        it('should return all films', () => __awaiter(void 0, void 0, void 0, function* () {
            const result = { total: 2, items: [] };
            jest.spyOn(service, 'findAll').mockResolvedValue(result);
            expect(yield controller.findAll()).toEqual(result);
            expect(service.findAll).toHaveBeenCalled();
        }));
    });
    describe('findOne', () => {
        it('should return a single film', () => __awaiter(void 0, void 0, void 0, function* () {
            const film = {
                id: '1',
                title: 'Test Film',
                director: 'Test Director',
                rating: 5,
                tags: 'Action, Drama',
                image: 'test-image.jpg',
                cover: 'test-cover.jpg',
                about: 'Test about',
                description: 'Test description',
                schedules: [],
            };
            jest.spyOn(service, 'findOne').mockResolvedValue(film);
            expect(yield controller.findOne('1')).toEqual(film);
            expect(service.findOne).toHaveBeenCalledWith('1');
        }));
        it('should throw NotFoundException if film is not found', () => __awaiter(void 0, void 0, void 0, function* () {
            jest.spyOn(service, 'findOne').mockResolvedValue(null);
            yield expect(controller.findOne('1')).rejects.toThrow(new common_1.NotFoundException('Фильм с ID 1 не найден'));
        }));
    });
    describe('getSchedule', () => {
        it('should return the schedule of a film', () => __awaiter(void 0, void 0, void 0, function* () {
            const film = {
                id: '1',
                title: 'Test Film',
                director: 'Test Director',
                rating: 5,
                tags: 'Action, Drama',
                image: 'test-image.jpg',
                cover: 'test-cover.jpg',
                about: 'Test about',
                description: 'Test description',
                schedules: [
                    {
                        id: '1',
                        daytime: '12:00',
                        hall: 1,
                        rows: 10,
                        seats: 100,
                        price: 15,
                        taken: ['A1', 'A2'],
                        film: null,
                    },
                ],
            };
            jest.spyOn(service, 'findOne').mockResolvedValue(film);
            const result = {
                total: 1,
                items: film.schedules,
            };
            expect(yield controller.getSchedule('1')).toEqual(result);
            expect(service.findOne).toHaveBeenCalledWith('1');
        }));
        it('should throw NotFoundException if film is not found', () => __awaiter(void 0, void 0, void 0, function* () {
            jest.spyOn(service, 'findOne').mockResolvedValue(null);
            yield expect(controller.getSchedule('1')).rejects.toThrow(new common_1.NotFoundException('Фильм с ID 1 не найден'));
        }));
    });
    describe('create', () => {
        it('should create a new film', () => __awaiter(void 0, void 0, void 0, function* () {
            const film = {
                id: '1',
                title: 'New Film',
                director: 'New Director',
                rating: 4,
                tags: 'Comedy',
                image: 'new-image.jpg',
                cover: 'new-cover.jpg',
                about: 'New about',
                description: 'New description',
                schedules: [],
            };
            jest.spyOn(service, 'create').mockResolvedValue(film);
            expect(yield controller.create(film)).toEqual(film);
            expect(service.create).toHaveBeenCalledWith(film);
        }));
    });
});
