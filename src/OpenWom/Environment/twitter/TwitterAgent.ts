import {Agent} from '../../Essential/Agent';

// tslint:disable-next-line:class-name
export class TwitterAgent extends Agent {
  private type: number;
  private statusHistory: Array<string>;
  private currentState: string;
  private futureState: string;
  // private links: Array<TwitterAgent>; preguntar como hacer el override aquí o algo que me permita tener un array de TwitterAgent


// tslint:disable-next-line:max-line-length
  constructor(seed: boolean, follower: number, type: number) {
    super(seed, follower);
    this.type = type;
    this.currentState = 'inactive';
    this.statusHistory = [];
  }

  public getType(): number {
    return this.type;
  }

  public setType(type: number) {
    this.type = type;
  }

  public getStatusHistory(): Array<string> {
    return this.statusHistory;
  }

  public getCurrentState(): string {
    return this.currentState;
  }

  public setCurrentState(newCurrent: string): void {
    this.currentState = newCurrent;
  }

  public getFutureState(): string {
    return this.futureState;
  }

  public setFutureState(newState: string): void {
    this.futureState = newState;
  }

  public sendMessage() { // al parecer así funciona el override
    super.sendMessage();
    this.retweet();
    this.futureState = 'Sent';
    this.sentMessage = true;
  }

  public messageNotification() { // buscarle un mejor nombre
    super.messageNotification();
    if (this.currentState !== 'Sent') {
      this.receivedMessage = true;
      this.futureState = 'Received';
    }
  }

  public inactiveAgent(): void {
    this.futureState = this.currentState;
  }

  public retweet(): void {
    this.links.forEach(link => link.messageNotification()); // aqui se debe cambiar el estado de los agentes que reciben el mensaje
  }

  public createLinks(network: Array<TwitterAgent>): void {
    let count = 0;
    while (count < this.nLinks) {
      const x = Math.floor(Math.random() * network.length);
      // @ts-ignore
      if (network[x].getId() !== this.id && !this.links.includes(network[x])) {
        // @ts-ignore
        this.links.push(network[x]);
        count++;
      }
    }
  }

  public updateState(): void {
    this.statusHistory.push(this.currentState);
    console.log(this.id + ' Anterior: ' + this.currentState);
    this.currentState = this.futureState;
    console.log(this.id + ' Nuevo: ' + this.currentState);
    this.futureState = null;
  }

  // States values: 0 inactive; 1 Received; 2 Sent
  // @ts-ignore
  public doStep(period: number, selectAction: number) {
    super.doStep(period);
    switch (selectAction) {
      case 0 : { // Retweet
        if (this.receivedMessage && this.sentMessage) {
          this.inactiveAgent();
        } else {
          this.sendMessage();
        }

        // this.setState('Sent', 2, period); // guardar el estado en el historial
        console.log('Periodo: ' + period + ' Agente: ' + this.id + ' Estado: ' + this.currentState);
        break;
      }
      case 1: { // inactive Agent
        this.inactiveAgent();
        console.log('Periodo: ' + period + ' Agente: ' + this.id + ' Estado: ' + this.currentState);
        break;
      }
      case 2: { // seeds_initialization
        this.messageNotification();
        console.log('Periodo: ' + period + ' Agente: ' + this.id + ' Estado: ' + this.currentState);
        break;
      }
      // tslint:disable-next-line:no-switch-case-fall-through
      default: {
        this.states.clone();
      }

    }
  }

}





