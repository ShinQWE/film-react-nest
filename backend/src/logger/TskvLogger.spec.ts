/* eslint-disable prettier/prettier */
import { TskvLogger } from './TskvLogger';

describe('TskvLogger', () => {
  let logger: TskvLogger;

  beforeEach(() => {
    logger = new TskvLogger();
  });

  it('should format log messages as TSKV', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    logger.log('Test message', 'param1', 'param2');

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('level=log\tmessage=Test message\tparam=param1\tparam=param2'),
    );

    consoleSpy.mockRestore();
  });
});