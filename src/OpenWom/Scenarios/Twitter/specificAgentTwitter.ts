import {twitterAgent} from '../../Environment/twitter/TwitterAgent';

// tslint:disable-next-line:class-name
export class specificAgentTwitter extends twitterAgent {
  protected readProbability: number;
  protected shareProbability: number;
  protected influence: number;

  constructor(seed: boolean, follower: number, type: number, influence ?: number, readProbability ?: number, shareProbability ?: number) {
    super(seed, follower, type);
    this.readProbability = readProbability;
    this.shareProbability = shareProbability;
    this.influence = influence;
  }

  public getReadProbability() {
    return this.readProbability;
  }

  public getShareProbability() {
    return this.shareProbability;
  }

  public getInfluence() {
    return this.influence;
  }
}
