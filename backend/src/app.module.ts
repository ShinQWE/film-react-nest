/* eslint-disable prettier/prettier */
// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { ServeStaticModule } from '@nestjs/serve-static';
// import * as path from 'node:path';

// import { configProvider } from './app.config.provider';
// import { FilmsModule } from './films/films.module';
// import { OrderModule } from './order/order.module'; 

// @Module({
//   imports: [
//     ConfigModule.forRoot({
//       isGlobal: true,
//       cache: true,
//     }),
//     MongooseModule.forRootAsync({
//       imports: [ConfigModule],
//       useFactory: (configService: ConfigService) => ({
//         uri: configService.get<string>('DATABASE_URL'),
//       }),
//       inject: [ConfigService],
//     }),
//     ServeStaticModule.forRoot({
//       rootPath: path.join(__dirname, '..', 'public', 'content', 'afisha'),
//       serveRoot: '/content/afisha/',
//     }),
//     FilmsModule,
//     OrderModule,
//   ],
//   controllers: [],
//   providers: [configProvider],
// })
// export class AppModule {}
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'node:path';

import { DatabaseModule } from './database.module'; 
import { FilmsModule } from './films/films.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'public', 'content', 'afisha'),
      serveRoot: '/content/afisha/',
    }),
    DatabaseModule, 
    FilmsModule,
    OrderModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}