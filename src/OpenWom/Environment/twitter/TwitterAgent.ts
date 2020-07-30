import {Agent} from '../../Essential/Agent';

// tslint:disable-next-line:class-name
export class TwitterAgent extends Agent {
  protected type: number;

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

}





