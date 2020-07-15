import {Step} from './Step';
import {Environment} from './Environment';
import {Logger} from '../logger/Logger';

// tslint:disable-next-line:class-name
export abstract class Simulation implements Step {  // abstract
  protected static id = 0;
  protected env: Environment;
  protected periods: number;
  private id: number;

  protected constructor(env: Environment, periods: number) {
    Simulation.id++;
    this.env = env; // esto puede ser creado adentro y no afuera (composicion)
    this.periods = periods;
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

