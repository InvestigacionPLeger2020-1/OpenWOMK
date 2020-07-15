const log4js = require('log4js'); // cambiar to import

export class Logger {
  private static readonly LEVEL = 'DEBUG'; // change for more info
  private static readonly log = log4js.getLogger();

  private static initLogger(): void {
    Logger.log.level = Logger.LEVEL;
  }

  public static info(msg: string): void {
    Logger.initLogger();
    Logger.log.info(msg);
  }

  public static debug(msg: string): void {
    Logger.initLogger();
    Logger.log.debug(msg);
  }

  public static error(msg: string): void {
    Logger.initLogger();
    Logger.log.error(msg);
  }

  public static warn(msg: string): void {
    Logger.initLogger();
    Logger.log.warn(msg);
  }
}
