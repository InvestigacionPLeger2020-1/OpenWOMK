export abstract class State {
  protected state: Map<string, number>;

  protected constructor(dict?: Map<string, number>) {
    this.state = dict === undefined ? new Map() : dict;
  }

  public get(k: string): number {
    return this.state.get(k);
  }

  public set(k: string, v: number) {
    this.state.set(k, v);
  }

  public toString(): string {
    let text = '';
    const keys = this.state.keys();

    for (const [key, value] of this.state.entries()) {
      text += '{' + key + '=' + value + '}';
    }
    return text;
  }

}
