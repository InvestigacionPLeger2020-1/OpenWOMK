import {hub} from '../Scenarios/hub/hub';
import {getHtmlTagDefinition} from '@angular/compiler';
import {Agent} from './Agent';
import {twitterAgent} from '../Environment/twitter/twitterAgent';
import {Step} from './Step';
import {Environment} from './Environment';

// tslint:disable-next-line:class-name
export abstract class Simulation implements Step{  //abstract
  protected static id = 0;
  protected env: Environment;
  protected periods: number;
  private id: number;

  protected constructor(env: Environment, periods: number) {
    Simulation.id++;
    this.env = env; //esto puede ser creado adentro y no afuera (composicion)
    this.periods = periods;
  }

  run(callback: () => void) {
    for (let period: number; period < this.periods; ++period) {
      this.env.doStep(period);
      callback.apply(this, arguments);
    }
  }

  public doStep(period): void {
    this.env.doStep(period);
  }

  public reinit(): void {
    this.env.reinit();
  }

  public toString(): string {
    return 'Simulation: ' + this.id;
  }



  /*
      private repetition: number;
      private seedSize: number;
      private periods: number;
      private networkSize: number;

      */
  // agentes
// influence: number,  state: string, followers: number, participation: number,  readprobability: number, characteristicones: string
}

function beginSimulation() {

}

function getResults() {

}

function createEnv() {

}

function createVariation() {

}

function createAction() {

}

