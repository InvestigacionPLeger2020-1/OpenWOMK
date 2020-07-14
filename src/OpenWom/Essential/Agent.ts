import {State} from './State';
import {Step} from './Step';
import {Logger} from "../logger/clog4j";

// tslint:disable-next-line:class-name
export abstract class Agent implements Step {
  private static counter = 0;
  protected id: number;
  protected states: Array<State>;
  protected links: Agent [];
  protected actions: Map<string, () => void>;


  protected constructor() {// borrar ID
    this.id = Agent.counter++;
    this.states = new Array<State>();
    this.links = []; // rename to links!!!
  }

  getLinks(): Array<Agent> {
    return this.links;
  }

  addLinks(links: Array<Agent>): void {
    // this.links.push.apply(this.links, links); (si es dificil para ustedes
    links.forEach(link => this.links.push(link));
  }

  getState(key: string, period?: number): number {
    return period === undefined ?
      this.states[this.states.length - 1].get(key) :
      this.states[period].get(key);
  }

  addState(key: string, value: number, period?: number) {
    period = period === undefined ? this.states.length - 1 : period;
    this.states[period].set(key, value);
  }

  getId(): number {
    return this.id;
  }

  reinit(): void {
    this.links = [];
    this.states = [];
  }

  doStep(period: number): void {
    Logger.debug(this);
  }

  public toString(): string {
    return 'Agent ' + this.id + ' other values:';
  }
}
