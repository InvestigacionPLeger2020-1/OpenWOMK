import {Agent} from '../../Essential/Agent';

// tslint:disable-next-line:class-name
export class TwitterAgent extends Agent {
  private type: number;
  private currentState: string;
  private futureState: string;
  // private links: Array<TwitterAgent>; preguntar como hacer el override aquí o algo que me permita tener un array de TwitterAgent


// tslint:disable-next-line:max-line-length
  constructor(seed: boolean, follower: number, type: number) {
    super(seed, follower);
    this.type = type;
    this.currentState = 'inactive';
  }

  public getType(): number {
    return this.type;
  }

  public setType(type: number) {
    this.type = type;
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

  public sendMessage() {
    super.sendMessage();
    if (this.receivedMessage && !this.sentMessage && !this.changeFlag) {
      this.retweet();
      this.futureState = 'Sent';
      this.sentMessage = true;
    }
    this.changeFlag = true;
  }

  public messageNotification() { // buscarle un mejor nombre
    super.messageNotification();
    // console.log(' REfu: ' + this.getId());
    if (!this.receivedMessage && !this.sentMessage && !this.changeFlag) {
      this.receivedMessage = true;
      this.futureState = 'Received';
      // console.log('recibe: ' + this.getId());
    }
    this.changeFlag = true;
  }

  public inactiveAgent(): void {
    if (!this.changeFlag) {
      this.futureState = this.currentState;
      this.changeFlag = true;
    }
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

  public updateState(period: number, simulationId: number): void {
    this.statusHistory.push({SimulationId: simulationId, Period: period, AgentId: this.id, Status: this.currentState});
    // console.log(this.id + ' A: ' + this.currentState);
    this.currentState = this.futureState;
    // console.log(this.id + ' N: ' + this.currentState);
    this.changeFlag = false;
  }

  // States values: 0 inactive; 1 Received; 2 Sent
  // @ts-ignore
  public doStep(period: number, selectAction: number) {
    super.doStep(period);

    switch (selectAction) {
      case 0 :  // Retweet
        if (this.receivedMessage && !this.sentMessage) {
          this.sendMessage();
        } else {
          this.inactiveAgent();
        }
        // this.changeFlag = true;
        // this.setState('Sent', 2, period); // guardar el estado en el historial
        // console.log('Periodo: ' + period + ' Agente: ' + this.id + ' Followers: ' + this.getNLinks() + ' Estado: ' + this.currentState);
        break;
      case 1:  // inactive Agent
        this.inactiveAgent();
        // this.changeFlag = true;
        // console.log('Periodo: ' + period + ' Agente: ' + this.id + ' Followers: ' + this.getNLinks() + ' Estado: ' + this.currentState);
        break;
      case 2:  // seeds_initialization
        this.messageNotification();
        // this.changeFlag = true;
        // console.log('Periodo: ' + period + ' Agente: ' + this.id + ' Followers: ' + this.getNLinks() + ' Estado: ' + this.currentState);
        break;  // tslint:disable-next-line:no-switch-case-fall-through
      default:
        this.states.clone();
    }

  }

}





