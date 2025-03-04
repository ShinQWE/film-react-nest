"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prettier/prettier */
const JsonLogger_1 = require("./JsonLogger");
describe('JsonLogger', () => {
    let logger;
    beforeEach(() => {
        logger = new JsonLogger_1.JsonLogger();
    });
    it('should format log messages as JSON', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
        logger.log('Test message', 'param1', 'param2');
        expect(consoleSpy).toHaveBeenCalledWith(JSON.stringify({
            level: 'log',
            message: 'Test message',
            optionalParams: ['param1', 'param2'],
        }));
        consoleSpy.mockRestore();
    });
});
