import {Agent} from '../../Essential/Agent';

// tslint:disable-next-line:class-name
export class TwitterAgent extends Agent {
  private type: number;
  // private links: Array<TwitterAgent>; preguntar como hacer el override aquí o algo que me permita tener un array de TwitterAgent


// tslint:disable-next-line:max-line-length
  constructor(seed: boolean, follower: number, type: number) {
    super(seed, follower);
    this.type = type;
  }

  public getType(): number {
    return this.type;
  }

  public setType(type: number) {
    this.type = type;
  }

  public sendMessage() { // al parecer así funciona el override
    super.sendMessage();
    this.retweet();
  }

  public retweet(): void {
    this.links.forEach(link => link.setMessageReceived(true)); // aqui se debe cambiar el estado de los agentes que reciben el mensaje
    this.messageSent = true;
    // this.states.cambiarEstadoAEnviado()
    // PD: volver a preguntar como utilizar state y states
  }

  public createLinks(network: Array<TwitterAgent>): void {
    let count = 0;
    while (count < this.nLinks) {
      const x = Math.floor(Math.random() * network.length);
      if (network[x].getId() !== this.id && !this.links.includes(network[x])) {
        this.links.push(network[x]);
        count++;
      }
    }
  }
  // push
  public doStep(period: number) {
    super.doStep(period);
  }

}





