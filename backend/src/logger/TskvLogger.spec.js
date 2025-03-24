"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prettier/prettier */
const TskvLogger_1 = require("./TskvLogger");
describe('TskvLogger', () => {
    let logger;
    beforeEach(() => {
        logger = new TskvLogger_1.TskvLogger();
    });
    it('should format log messages as TSKV', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
        logger.log('Test message', 'param1', 'param2');
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('level=log\tmessage=Test message\tparam=param1\tparam=param2'));
        consoleSpy.mockRestore();
    });
});
