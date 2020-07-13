
// tslint:disable-next-line:class-name
export abstract class agent{

   protected influence: number;
   protected state: string;
   protected nextState: string;
   protected id: number;
   protected followers: agent [];

        constructor(influence: number, state: string, nextState: string){
        this.influence = 0;
        this.state = 'void';
        this.nextState = 'void';
        this.followers = [];
    }
    getfollowers(): any{
          return this.followers;
    }
    setfollowers(follower: agent): any {
          this.followers.push(follower);
    }
    getState(): string{
          return this.state;
    }
    setState(state: string): void{
          this.state = state;
    }
  getNextState(): string{
    return this.nextState;
  }
  setNextState(state: string): void{
    this.nextState = state;
  }
    abstract createAction(): any;
    abstract createRule(): any;
  //  abstract addFollower(): void;
  // abstract createAgent(): any;

}
