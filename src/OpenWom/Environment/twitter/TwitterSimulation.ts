import {Simulation} from '../../Essential/Simulation';
import {ABMdata} from '../../Essential/ABMdata';
import {TwitterAgent} from './TwitterAgent';
import {TwitterEnv} from './TwitterEnv';

export class TwitterSimulation extends Simulation {
  private networkSize: number;
  private network: Array<TwitterAgent>;

  constructor(env: TwitterEnv, periods: number, networkSize: number) {
    super(env, periods);
    this.networkSize = networkSize;
  }

  public printNetwork(): void {
    for (let i = 0; i < this.networkSize; i++) {
      console.log(this.network[i].getId());
    }
  }

  // no recuerdo bien lo del @override pero la idea es que este metodo esté en Simulation y se sobre escriba aquí
  public createNetwork(abms: ABMdata): void {
    this.createTwitterAgents(abms);
  }

  private createTwitterAgents(abms: ABMdata): void {
    const totalAgent: number = Math.trunc(abms.getUserParticipation() * this.networkSize);
    for (let i = 0; i < totalAgent; i++) {
      const nFollowers: number = Math.trunc(Math.random() * (abms.getUserLinksMax() - abms.getUserLinksMin() + abms.getUserLinksMin()));
      // const influence: number = (Math.random() * (array[6] - array[5]) + array[5]).toFixed(3);
      const newAgent: TwitterAgent = new TwitterAgent(abms.getSeed(), nFollowers, abms.getUserType());
      this.network.push(newAgent);
    }
    this.network.forEach(link => link.createLinks(this.network)); // Revisar, no sé si lo utilizo bien
  }

  public sendMessageToSeeds(): void {
    // tslint:disable-next-line:only-arrow-functions
    this.network.forEach(function(link) {
      if (link.getIsSeed()) {
        link.setMessageReceived(true);
      } // aqui deberia aumentar el periodo p+= 1 y tengo la duda si debería enviarse inmediatamente el mensaje a los seguidores
    });  // preguntar si está correcta la utilizacion del forEach
  }

  public sendMessage(): void {
    for (let i = 0; i < this.networkSize; i++) {
      const courier = this.network[i];
      if (courier.getIsSeed() && !courier.getMessageReceived()) {
        courier.retweet();
      } else if (courier.getMessageReceived() && !courier.getMessageSent()) {
        if (this.probabilityToSendMessage === -1) {
          if (Math.random() > 0.5) { // Si no se define una probabilidad de compartir el mensaje se lanza a un 50 50
            courier.getLinks().forEach(link => link.sendMessage());
          } else if (Math.random() > this.probabilityToSendMessage) {
            courier.getLinks().forEach(link => link.sendMessage());
          }
        }
      }
    }
  }

}
