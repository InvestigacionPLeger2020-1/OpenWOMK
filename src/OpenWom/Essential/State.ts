
export abstract class State {
  protected period: number;
  protected state: Map<string, number>;

  protected constructor(period: number, dict?: Map<string, number>) {
    this.period = period;
    this.state = dict === undefined ? new Map() : dict;
  }

  public get(k: string): number {
    return this.state.get(k);
  }
}
