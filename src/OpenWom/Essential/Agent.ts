import {Step} from './Step';
import {States} from './States';

export abstract class Agent implements Step {
  protected static counter = 0;
  protected id: number;
  protected seed: boolean;
  protected wear: number; // desgaste
  protected states: States;
  protected nLinks: number; // Numero de seguidores que tiene.
  protected actions: Map<string, () => void>;
  protected links: Array<Agent>; // me ha dado 1M de problemas esto
  protected messageReceived: boolean;
  protected messageSent: boolean;

  protected constructor(seed: boolean, nLinks: number) {
    this.id = Agent.counter++;
    this.reinit();
    this.seed = seed;
    this.nLinks = nLinks;
    this.messageReceived = false;
    this.messageSent = false;
  }

  public getState(key: string, period?: number): number {
    return this.states.getState(key, period);
  }

  public setState(key: string, value: number, period?: number) {
    this.states.setState(key, value, period);
  }

  public getMessageReceived(): boolean {
    return this.messageReceived;
  }

  public setMessageReceived(message: boolean): void {
    this.messageReceived = message;
  }

  public getMessageSent(): boolean {
    return this.messageSent;
  }

  public getLinks(): Array<Agent> {
    return this.links;
  }

  public setNLinks(nLinks: number): void {
    this.nLinks = nLinks;
  }

  public getNLinks(): number {
    return this.nLinks;
  }

  public getId(): number {
    return this.id;
  }

  public getIsSeed(): boolean {
    return this.seed;
  }

  protected addAction(name: string, action: () => void) {
    this.actions.set(name, action);
  }

  public reinit(): void {
    this.links = [];
    this.states = new States();
  }

  public addLinks(links: Array<Agent>): void {
    // this.links.push.apply(this.links, links); (si es dificil para ustedes
    links.forEach(link => this.links.push(link));
  }

  public doStep(period: number): void {
    // Logger.debug(this.toString());
  }

  public toString(): string {
    return `Agent ${this.id} other values:`;
  }

  public sendMessage(): void {
  }

}
