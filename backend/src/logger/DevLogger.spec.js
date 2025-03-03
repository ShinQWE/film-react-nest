"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prettier/prettier */
const common_1 = require("@nestjs/common");
const DevLogger_1 = require("./DevLogger");
describe('DevLogger', () => {
    let logger;
    beforeEach(() => {
        logger = new DevLogger_1.DevLogger();
        jest.spyOn(common_1.ConsoleLogger.prototype, 'log');
        jest.spyOn(common_1.ConsoleLogger.prototype, 'error');
        jest.spyOn(common_1.ConsoleLogger.prototype, 'warn');
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('should log messages with [DEV] prefix', () => {
        const message = 'Test log message';
        logger.log(message);
        expect(common_1.ConsoleLogger.prototype.log).toHaveBeenCalledWith(`[DEV] ${message}`);
    });
    it('should log errors with [DEV ERROR] prefix', () => {
        const message = 'Test error message';
        logger.error(message);
        expect(common_1.ConsoleLogger.prototype.error).toHaveBeenCalledWith(`[DEV ERROR] ${message}`, undefined);
    });
    it('should log warnings with [DEV WARNING] prefix', () => {
        const message = 'Test warning message';
        logger.warn(message);
        expect(common_1.ConsoleLogger.prototype.warn).toHaveBeenCalledWith(`[DEV WARNING] ${message}`);
    });
    it('should not log in production mode', () => {
        process.env.NODE_ENV = 'production';
        const message = 'Test log message';
        logger.log(message);
        expect(common_1.ConsoleLogger.prototype.log).not.toHaveBeenCalled();
    });
});
