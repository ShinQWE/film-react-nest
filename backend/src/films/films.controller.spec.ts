/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { FilmsController } from './films.controller';
import { FilmsService } from './films.service';
import { NotFoundException } from '@nestjs/common';
import { Film, Schedule } from './entity';

describe('FilmsController', () => {
  let controller: FilmsController;
  let service: FilmsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilmsController],
      providers: [
        {
          provide: FilmsService,
          useValue: {
            findAll: jest.fn().mockResolvedValue({ total: 2, items: [] }),
            findOne: jest.fn(),
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<FilmsController>(FilmsController);
    service = module.get<FilmsService>(FilmsService);
  });

  describe('findAll', () => {
    it('should return all films', async () => {
      const result = { total: 2, items: [] };
      jest.spyOn(service, 'findAll').mockResolvedValue(result);

      expect(await controller.findAll()).toEqual(result);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single film', async () => {
      const film: Film = {
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

      expect(await controller.findOne('1')).toEqual(film);
      expect(service.findOne).toHaveBeenCalledWith('1');
    });

    it('should throw NotFoundException if film is not found', async () => {
      jest.spyOn(service, 'findOne').mockResolvedValue(null);

      await expect(controller.findOne('1')).rejects.toThrow(
        new NotFoundException('Фильм с ID 1 не найден'),
      );
    });
  });

  describe('getSchedule', () => {
    it('should return the schedule of a film', async () => {
      const film: Film = {
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
          } as Schedule,
        ],
      };
      jest.spyOn(service, 'findOne').mockResolvedValue(film);

      const result = {
        total: 1,
        items: film.schedules,
      };

      expect(await controller.getSchedule('1')).toEqual(result);
      expect(service.findOne).toHaveBeenCalledWith('1');
    });

    it('should throw NotFoundException if film is not found', async () => {
      jest.spyOn(service, 'findOne').mockResolvedValue(null);

      await expect(controller.getSchedule('1')).rejects.toThrow(
        new NotFoundException('Фильм с ID 1 не найден'),
      );
    });
  });

  describe('create', () => {
    it('should create a new film', async () => {
      const film: Film = {
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

      expect(await controller.create(film)).toEqual(film);
      expect(service.create).toHaveBeenCalledWith(film);
    });
  });
});