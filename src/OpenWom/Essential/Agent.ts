import {Step} from './Step';
import {States} from './States';

export abstract class Agent implements Step {
  protected static counter = 0;
  protected id: number;
  protected seed: boolean;
  protected wear: number; // desgaste
  protected messageReceived: boolean;
  protected states: States;
  protected links: Array<Agent>;
  protected nLinks: number; // Numero de seguidores que tiene.
  protected actions: Map<string, () => void>;

  protected constructor(seed: boolean, nLinks: number) {
    this.id = Agent.counter++;
    this.reinit();
    this.seed = seed;
    this.nLinks = nLinks;
    this.messageReceived = false;
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

  public getNLinks(): number {
    return this.nLinks;
  }

  public setNLinks(nLinks: number): void {
    this.nLinks = nLinks;
  }

  public createLinks(network: Array<Agent>): void {
    // tslint:disable-next-line:prefer-const
    let agent: Agent;
    let count = 0;
    while (count < agent.getNLinks()) {
      const x = Math.trunc(Math.random() * (network.length - 1));
      const newLink: Agent = network [x];
      if (newLink.getId() !== agent.getId() && !this.links.includes(newLink)) {
        this.links.push(newLink);
        count++;
      }
    }
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

  public getMessageReceived(): boolean {
    return this.messageReceived;
  }

  public setMessageReceived(message: boolean): void {
    this.messageReceived = message;
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
