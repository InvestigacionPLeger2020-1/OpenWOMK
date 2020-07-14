import {Environment} from '../../Essential/Environment';

export class FacebookEnv extends Environment {


  getAction(): any {
    console.log('action');
  }

  getLectureProbability(): any {
    console.log('lecture');
  }

  getVariation(): any {
    console.log('variation');
  }

  getNetwork(): any {
    console.log('network');
  }
}
