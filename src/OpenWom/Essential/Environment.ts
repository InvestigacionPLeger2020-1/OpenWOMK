import {Step} from './Step';
import {Agent} from './Agent';

export abstract class Environment implements Step {
  protected agents: Array<Agent>;

  protected constructor(/*agents: Array<Agent>*/) {
    // this.agents = agents;
  }

  doStep(period): void {
   this.agents.forEach(agent => agent.doStep(period));
  }

  reinit(): void {
    this.agents.forEach(agent => agent.reinit());
  }
}
