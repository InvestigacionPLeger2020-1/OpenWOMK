import {Agent} from '../../Essential/Agent';

// tslint:disable-next-line:class-name
export class twitterAgent extends Agent {
  protected follower: number; // Numero de seguidores que tiene.
  protected type: number;

// tslint:disable-next-line:max-line-length
  constructor(seed: boolean, follower: number, type: number) {
    super(seed);
    this.follower = follower;
    this.type = type;
  }

  public getFollower(): number {
    return this.follower;
  }

  public setFollowers(followers: number): void {
    this.follower = followers;
  }

  public getType(): number {
    return this.type;
  }

  public setType(type: number) {
    this.type = type;
  }


}





