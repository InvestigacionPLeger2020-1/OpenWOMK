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
  protected links: Array<Agent>;
  protected receivedMessage: boolean;
  protected sentMessage: boolean;
  protected changeFlag: boolean;
  protected statusHistory: Array<any>;

  protected constructor(seed: boolean, nLinks: number) {
    this.id = Agent.counter++;
    this.reinit();
    this.seed = seed;
    this.nLinks = nLinks;
    this.receivedMessage = false;
    this.sentMessage = false;
    this.changeFlag = false;
    this.statusHistory = [];
  }

  public getState(key: string, period?: number): number {
    return this.states.getState(key, period);
  }

  public setState(key: string, value: number, period?: number) {
    this.states.setState(key, value, period);
  }

  public getReceivedMessage(): boolean {
    return this.receivedMessage;
  }

  public setReceivedMessage(message: boolean): void {
    this.receivedMessage = message;
  }

  public getSentMessage(): boolean {
    return this.sentMessage;
  }

  public setSentMessage(message: boolean): void {
    this.sentMessage = message;
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

  public getStatusHistory(): Array<any> {
    return this.statusHistory;
  }

  protected addAction(name: string, action: () => void) {
    this.actions.set(name, action);
  }

  public toString(): string {
    return `Agent ${this.id} other values:`;
  }

  public reinit(): void {
    this.links = [];
    this.states = new States();
  }

  public addLinks(links: Array<Agent>): void {
    // this.links.push.apply(this.links, links); (si es dificil para ustedes
    links.forEach(link => this.links.push(link));
  }

  public printNetworkHistory(): Array<any> {
    // console.log('Agente: ' + this.id + ' Status: ' + this.statusHistory[period].Status);
    return this.statusHistory;
  }

  public doStep(period: number): void {
    // Logger.debug(this.toString());
  }

  public sendMessage(): void {
  }

  public messageNotification(): void {
  }

}
