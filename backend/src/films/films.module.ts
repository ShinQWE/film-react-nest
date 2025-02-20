/* eslint-disable prettier/prettier */
// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { FilmsController } from './films.controller';
// import { FilmsService } from './films.service';
// import { Film, FilmSchema } from './entity';

// @Module({
//   imports: [
//     MongooseModule.forFeature([{ name: Film.name, schema: FilmSchema }]),
//   ],
//   controllers: [FilmsController],
//   providers: [FilmsService],
//   exports: [MongooseModule, FilmsService], 
// })
// export class FilmsModule {}
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmsController } from './films.controller';
import { FilmsService } from './films.service';
import { Film, Schedule } from './entity';

@Module({
  imports: [TypeOrmModule.forFeature([Film, Schedule])],
  controllers: [FilmsController],
  providers: [FilmsService],
  exports: [FilmsService],
})
export class FilmsModule {}