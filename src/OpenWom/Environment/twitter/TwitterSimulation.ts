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
    this.network = [];
  }

  public doStep(period) {
    super.doStep(period);
    if (period === 0) {
      // this.network.forEach(link => link.setState('Inactive', 0, period));
      this.sendMessageToSeeds(period);
      // console.log('--------------');
    } else {
      this.sendMessage(period, this.probabilityToSendMessage);
      // console.log('--------------');
    }
  }

  public printNetwork(): void {
    // console.log('A');
    for (let i = 0; i < this.networkSize; i++) {
      // console.log(i);
      if (this.network[i].getIsSeed()) {
        // console.log(this.network[i].getId() + ' Seed');
      } else {
        // console.log(this.network[i].getId());
      }
    }
  }

  public getNetworkHistory() {
    super.getNetworkHistory();
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.network.length; i++) {
      const agentHistory = this.network[i].printNetworkHistory();
      this.history.addHistory(agentHistory);
    }
  }

  // no recuerdo bien lo del @override pero la idea es que este metodo esté en Simulation y se sobre escriba aquí
  public createNetwork(abms: ABMdata): void {
    this.createTwitterAgents(abms);
  }

  private createTwitterAgents(abms: ABMdata): void {
    const totalAgent: number = Math.floor((abms.getUserParticipation() / 100) * this.networkSize);
    for (let i = 0; i < totalAgent; i++) {
      const nFollowers: number = Math.floor(Math.random() * (abms.getUserLinksMax() - abms.getUserLinksMin() + 1) + abms.getUserLinksMin());
      // Math.floor(Math.random() * (max - min + 1) ) + min;
      // const influence: number = (Math.random() * (array[6] - array[5]) + array[5]).toFixed(3);
      // console.log('Min: ' + abms.getUserLinksMin() + ' Max: ' + abms.getUserLinksMax() + ' Rand: ' + nFollowers);
      // console.log('TipoA: ' + abms.getUserType() + ' Cant: ' + totalAgent);
      const newAgent: TwitterAgent = new TwitterAgent(abms.getSeed(), nFollowers, abms.getUserType());
      this.network.push(newAgent);
    }
  }

  public createFollowers(): void {
    this.network.forEach(link => link.createLinks(this.network)); // Revisar, no sé si lo utilizo bien
  }

  public sendMessageToSeeds(period: number): void {
    // tslint:disable-next-line:only-arrow-functions
    this.network.forEach(function(link) {
      if (link.getIsSeed()) {
        link.doStep(period, 2);
        // link.setState('Received', 1, period);
        // console.log('Recibido en ' + period + ' por ' + link.getId());
      } else {
        link.doStep(period, 1);
      }
    });
    this.network.forEach(link => link.updateState(period, Simulation.id));
  }
// hh
  public sendMessage(period: number, probability: number): void {
    // tslint:disable-next-line:only-arrow-functions
    this.network.forEach(function(link) {
      if (link.getReceivedMessage() && !link.getSentMessage() && link.getIsSeed()) {
        link.doStep(period, 0);
      } else if (link.getReceivedMessage() && !link.getSentMessage() && Math.random() < probability) {
        link.doStep(period, 0);
      } else {
        link.doStep(period, 1);
      }
    });
    // console.log('----' + this.id);
    this.network.forEach(link => link.updateState(period, Simulation.id));
  }
}
