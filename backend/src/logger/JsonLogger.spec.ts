/* eslint-disable prettier/prettier */
import { JsonLogger } from './JsonLogger';

describe('JsonLogger', () => {
  let logger: JsonLogger;

  beforeEach(() => {
    logger = new JsonLogger();
  });

  it('should format log messages as JSON', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    logger.log('Test message', 'param1', 'param2');

    expect(consoleSpy).toHaveBeenCalledWith(
      JSON.stringify({
        level: 'log',
        message: 'Test message',
        optionalParams: ['param1', 'param2'],
      }),
    );

    consoleSpy.mockRestore();
  });
});