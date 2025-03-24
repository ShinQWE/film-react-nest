/* eslint-disable prettier/prettier */
import { ConsoleLogger } from '@nestjs/common';
import { DevLogger } from './DevLogger';

describe('DevLogger', () => {
  let logger: DevLogger;

  beforeEach(() => {
    logger = new DevLogger();
    jest.spyOn(ConsoleLogger.prototype, 'log'); 
    jest.spyOn(ConsoleLogger.prototype, 'error'); 
    jest.spyOn(ConsoleLogger.prototype, 'warn'); 
  });

  afterEach(() => {
    jest.clearAllMocks(); 
  });

  it('should log messages with [DEV] prefix', () => {
    const message = 'Test log message';

    logger.log(message);

    expect(ConsoleLogger.prototype.log).toHaveBeenCalledWith(`[DEV] ${message}`); 
  });

  it('should log errors with [DEV ERROR] prefix', () => {
    const message = 'Test error message';

    logger.error(message);

    expect(ConsoleLogger.prototype.error).toHaveBeenCalledWith(`[DEV ERROR] ${message}`, undefined); 
  });

  it('should log warnings with [DEV WARNING] prefix', () => {
    const message = 'Test warning message';

    logger.warn(message);

    expect(ConsoleLogger.prototype.warn).toHaveBeenCalledWith(`[DEV WARNING] ${message}`); 
  });

  it('should not log in production mode', () => {
    process.env.NODE_ENV = 'production'; 
    const message = 'Test log message';
  
    logger.log(message);
  
    expect(ConsoleLogger.prototype.log).not.toHaveBeenCalled();
  });
});