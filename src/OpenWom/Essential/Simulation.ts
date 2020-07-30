import {Step} from './Step';
import {Logger} from '../logger/Logger';
import {Environment} from './Environment';
import {TwitterEnv} from '../Environment/twitter/TwitterEnv';

export abstract class Simulation implements Step {  // abstract
  protected static id = 0;
  protected periods: number;
  protected id: number;
  protected env: Environment;


  protected constructor(env: TwitterEnv, periods: number) {
    Simulation.id++;
    this.env = env; // esto puede ser creado adentro y no afuera (composicion)
    this.periods = periods;
  }

  public getId(): number {
    return this.id;
  }

  public getPeriods(): number {
    return this.periods;
  }

  public setPeriods(period: number): void {
    this.periods = period;
  }
  public getEnv(): Environment {
    return this.env;
  }

  run(callback: () => void) {
    for (let period = 0; period < this.periods; ++period) {
      this.doStep(period);
      callback.apply(this, arguments); // for special cases (scenarios)
    }
  }

  public doStep(period): void {
    Logger.debug(`Period: ${period} Simulation:${this}`);
    this.env.doStep(period);
  }

  public reinit(): void {
    this.env.reinit();
  }
  public toString(): string {
    return 'Simulation: ' + this.id;
  }

}



