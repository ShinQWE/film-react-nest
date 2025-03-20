/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Film } from './films/entity'; // Убедитесь, что путь правильный
import { Schedule } from './films/entity'; // Убедитесь, что путь правильный

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'postgres',
          host: configService.get<string>('DATABASE_HOST'),
          port: configService.get<number>('DATABASE_PORT'),
          username: configService.get<string>('DATABASE_USERNAME'),
          password: configService.get<string>('DATABASE_PASSWORD'),
          database: configService.get<string>('DATABASE_NAME'),
          entities: [Film, Schedule],
          synchronize: process.env.NODE_ENV !== 'production', // Синхронизация только в разработке
        };
      },
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([Film, Schedule]), 
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}