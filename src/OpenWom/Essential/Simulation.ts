import {hub} from '../Scenarios/hub/hub';
import {getHtmlTagDefinition} from '@angular/compiler';
import {Agent} from './Agent';
import {twitterAgent} from '../Environment/twitter/twitterAgent';
import {Step} from "./Step";

// tslint:disable-next-line:class-name
export abstract class Simulation implements Step{  //abstract
  protected static id = 0;
  protected agents: Array<Agent>;
  protected periods: number;

  protected constructor(agents: Array<Agent>, periods: number) {
    Simulation.id++;
  }

  doStep(period): void {
    this.agents.forEach(agent => {
     agent.doStep(period);
    });
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

