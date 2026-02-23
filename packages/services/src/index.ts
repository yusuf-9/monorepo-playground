export class Logger {
  private prefix: string;

  constructor(prefix: string = "APP") {
    this.prefix = prefix;
  }

  log(message: string): void {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${this.prefix}] ${message}`);
  }

  error(message: string): void {
    const timestamp = new Date().toISOString();
    console.error(`[${timestamp}] [${this.prefix}] ERROR: ${message}`);
  }

  info(message: string): void {
    const timestamp = new Date().toISOString();
    console.info(`[${timestamp}] [${this.prefix}] INFO: ${message}`);
  }
}

export function createLogger(prefix?: string): Logger {
  return new Logger(prefix);
}
