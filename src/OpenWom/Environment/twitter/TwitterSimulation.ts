import {Simulation} from '../../Essential/Simulation';
import {ABMdata} from '../../Essential/ABMdata';
import {TwitterAgent} from './TwitterAgent';
import {Agent} from '../../Essential/Agent';
import {TwitterEnv} from './TwitterEnv';

export class TwitterSimulation extends Simulation {
  private networkSize: number;
  private network: Array<Agent>;

  constructor(env: TwitterEnv, periods: number, networkSize: number) {
    super(env, periods);
    this.networkSize = networkSize;
  }

  public createNetwork(abms: ABMdata): void {
    this.createTwitterAgent(abms);
  }

  public printNetwork(): void {
    for (let i = 0; i < this.networkSize; i++) {
      console.log(this.network[i].getId());
    }
  }

  private createTwitterAgent(abms: ABMdata): void {
    const totalAgent: number = Math.trunc(abms.getUserParticipation() * this.networkSize);
    for (let i = 0; i < totalAgent; i++) {
      const nFollowers: number = Math.trunc(Math.random() * (abms.getUserLinksMax() - abms.getUserLinksMin() + abms.getUserLinksMin()));
      // const influence: number = (Math.random() * (array[6] - array[5]) + array[5]).toFixed(3);
      const newAgent: TwitterAgent = new TwitterAgent(abms.getSeed(), nFollowers, abms.getUserType());
      this.network.push(newAgent);
    }
  }
}
