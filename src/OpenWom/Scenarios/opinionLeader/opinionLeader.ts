import {twitterAgent} from '../../Environment/twitter/twitterAgent';

// tslint:disable-next-line:class-name
export class opinionleader extends twitterAgent {
  constructor(influence: number, state: string, nextState: string, followers: number, readProbability: number) {
    super(influence, state, nextState, followers, readProbability);
  }

  opinionleader(characteristicasone: string, state: string, followers: number, readProbability: number) {
    this.state = state;
    this.readProbability = readProbability;


  }
}
