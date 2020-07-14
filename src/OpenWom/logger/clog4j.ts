const log = require('clog4js'); // cambiar to import

export class Logger {
    public static info(msg: object): void {
      log.info(msg);
    }

    public static debug(msg: object): void {
      log.debug(msg);
    }
}
