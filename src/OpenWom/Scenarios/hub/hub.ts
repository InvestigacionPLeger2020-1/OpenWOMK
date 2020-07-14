import {twitterAgent} from '../../Environment/twitter/twitterAgent';

// tslint:disable-next-line:class-name
export class hub extends twitterAgent {
  // tslint:disable-next-line:max-line-length
  constructor(influence ?: number, id ?: number, readprobability ?: number) {
    super(influence, id, readprobability);
  }

}
