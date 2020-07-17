import {Step} from './Step';
import {States} from './States';

// tslint:disable-next-line:class-name
export abstract class Agent implements Step {
  private static counter = 0;
  protected id: number;
  protected seed: boolean;
  protected wear: number; // desgaste
  protected states: States;
  protected links: Array<Agent>;
  protected actions: Map<string, () => void>;

  protected constructor(seed: boolean) {
    this.id = Agent.counter++;
    this.reinit();
    this.seed = seed;
  }

  protected addAction(name: string, action: () => void) {
    this.actions.set(name, action);
  }

  public getState(key: string, period?: number): number {
    return this.states.getState(key, period);
  }

  public setState(key: string, value: number, period?: number) {
    this.states.setState(key, value, period);
  }

  public getLinks(): Array<Agent> {
    return this.links;
  }

  public addLinks(links: Array<Agent>): void {
    // this.links.push.apply(this.links, links); (si es dificil para ustedes
    links.forEach(link => this.links.push(link));
  }

  public getId(): number {
    return this.id;
  }

  public getIsSeed(): boolean {
    return this.seed;
  }

  public reinit(): void {
    this.links = [];
    this.states = new States();
  }

  public doStep(period: number): void {
    // Logger.debug(this.toString());
  }

  public toString(): string {
    return `Agent ${this.id} other values:`;
  }
}
