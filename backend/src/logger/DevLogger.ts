/* eslint-disable prettier/prettier */
import { Injectable, ConsoleLogger } from '@nestjs/common';

@Injectable()
export class DevLogger extends ConsoleLogger {
  log(message: string) {
    if (process.env.NODE_ENV !== 'production') {
      super.log(`[DEV] ${message}`); 
    }
  }

  error(message: string, stack?: string) {
    if (process.env.NODE_ENV !== 'production') {
      super.error(`[DEV ERROR] ${message}`, stack); 
    }
  }

  warn(message: string) {
    if (process.env.NODE_ENV !== 'production') {
      super.warn(`[DEV WARNING] ${message}`); 
    }
  }
}