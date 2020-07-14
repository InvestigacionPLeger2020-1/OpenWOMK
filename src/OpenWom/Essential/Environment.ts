import {Step} from './Step';
import {Agent} from './Agent';

export abstract class Environment implements Step {
  protected agents: Array<Agent>;

  protected constructor(agents: Array<Agent>) {
    this.agents = agents;
  }

/*

  public getnSimulation() {
    this.nsimulation = this.nsimulation;

  }

  public setPeriods(p: number) {
    this.periods = p;
  }

  public setnSimulation(n: number) {
    this.nsimulation = n;
  }


  abstract getVariation(): any;

  abstract getAction(): any;

  abstract getLectureProbability(): number;

  abstract getNetwork(): string;
*/

  doStep(period): void {
   this.agents.forEach(agent => agent.doStep(period));
  }

  reinit(): void {
    this.agents.forEach(agent => agent.reinit());
  }


}
