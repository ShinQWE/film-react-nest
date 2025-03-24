"use strict";
/* eslint-disable prettier/prettier */
// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import 'dotenv/config'
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
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.setGlobalPrefix("api/afisha");
//   app.enableCors();
//   await app.listen(3000);
// }
// bootstrap();
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
require("dotenv/config");
const DevLogger_1 = require("./logger/DevLogger");
const JsonLogger_1 = require("./logger/JsonLogger");
const TskvLogger_1 = require("./logger/TskvLogger");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule, {
            bufferLogs: true,
        });
        app.setGlobalPrefix('api/afisha');
        app.enableCors();
        const loggerType = process.env.LOGGER_TYPE || 'dev';
        switch (loggerType) {
            case 'json':
                app.useLogger(new JsonLogger_1.JsonLogger());
                break;
            case 'tskv':
                app.useLogger(new TskvLogger_1.TskvLogger());
                break;
            default:
                app.useLogger(new DevLogger_1.DevLogger());
        }
        yield app.listen(3000);
    });
}
bootstrap();
