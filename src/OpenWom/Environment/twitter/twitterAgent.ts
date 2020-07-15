import {Agent} from '../../Essential/Agent';
import {sanitizeIdentifier} from '@angular/compiler';

// tslint:disable-next-line:class-name
export class twitterAgent extends Agent {

  protected readProbability: number;
  protected shareProbability: number;
  protected follower: number; // Numero de seguidores que tiene.
  protected influence: number;
  protected type: number;

// tslint:disable-next-line:max-line-length
  constructor(seed: boolean, follower: number, type: number, influence ?: number, readProbability ?: number, shareProbability ?: number) {
    super(seed);
    this.readProbability = readProbability;
    this.shareProbability = shareProbability;
    this.follower = follower;
    this.influence = influence;
    this.type = type;
  }

}





