import {State} from './State';

export class States {
  private states: Array<State>;

  public constructor() {
    this.states = [];
  }


  getState(key: string, period?: number): number {
    period = period === undefined ? this.states.length - 1 : period;
    return this.states[period].get(key);
  }

  setState(key: string, value: number, period?: number) {
    period = period === undefined ? this.states.length - 1 : period;
    this.states[period].set(key, value);
  }

  getStates(key: string): Array<number> {
    const values = new Array<number>();

    this.states.forEach(state => values.push(state.get(key)));
    return values;
  }

  public clone(from?: number, to?: number): void {
    from = from === undefined ? this.states.length - 1 : from;
    to = to === undefined ? this.states.length : to;
    // this.states[to].push(this.states[from]);
    this.states.push(this.states[from]);
  }

  public size(): number {
    return this.states.length;
  }

  public toString(): string {
    return this.states.join('|');
  }
}
