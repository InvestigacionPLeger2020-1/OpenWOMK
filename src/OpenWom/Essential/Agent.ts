import {State} from './State';
import {Reinit} from './Reinit';
// tslint:disable-next-line:class-name
export abstract class Agent implements Reinit {
  private static counter = 0;
  protected id: number;
  protected states: Array<State>;
  protected followers: Agent [];
  protected actions: Map<string, () => void>;

  protected influence: number; // borrar
  protected nextState: string;

  protected constructor(influence: number, id: number) {// borrar ID
    this.id = Agent.counter++;
    this.influence = 0; // esto pertence a twitter
    this.states = new Array<State>();
    this.nextState = 'void'; // borrar esto
    this.followers = []; // rename to links!!!
  }

  getfollowers(): any {
    return this.followers;
  }

  setfollowers(follower: Agent): any {
    this.followers.push(follower);
  }

  getState(key: string, period?: number): number {
    return period === undefined ?
      this.states[this.states.length - 1].get(key) :
      this.states[period].get(key);
  }

  /*
  setState(state: string): void { // igual que el anterior
    this.state = state;
  }
   */

  getId(): number {
    return this.id;
  }

  /*
  getNextState(): string { // use igual que anterior con period + 1
    return this.nextState;
  }
   */

  setNextState(state: string): void {
    this.nextState = state;
  }

  reinit(): void {
    this.followers = [];
  }


  // abstract createAction(): any;

  // abstract createRule(): any;

  //  abstract addFollower(): void;
  // abstract createAgent(): any;

  doStep(period: number) {
    // something
  }
}
