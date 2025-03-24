/* eslint-disable prettier/prettier */
// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import 'dotenv/config'

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.setGlobalPrefix("api/afisha");
//   app.enableCors();
//   await app.listen(3000);
// }
// bootstrap();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { DevLogger } from './logger/DevLogger';
import { JsonLogger } from './logger/JsonLogger';
import { TskvLogger } from './logger/TskvLogger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  app.setGlobalPrefix('api/afisha');
  app.enableCors();

  const loggerType = process.env.LOGGER_TYPE || 'dev';

  switch (loggerType) {
    case 'json':
      app.useLogger(new JsonLogger());
      break;
    case 'tskv':
      app.useLogger(new TskvLogger());
      break;
    default:
      app.useLogger(new DevLogger());
  }

  await app.listen(3000);
}
bootstrap();