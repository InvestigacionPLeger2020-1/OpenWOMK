
export class Reporter {
  private networkHistory: Array<object>;

  constructor() {
    this.networkHistory = [];
  }

  public addHistory(newHistory: Array<object>): void {
    for (let i = 0; i < newHistory.length; i++) {
      this.networkHistory.push(newHistory[i]);
    }
  }

  public consoleLogNetwork(): void {
    console.log(Object.keys(this.networkHistory[0]));
    for (let i = 0; i < this.networkHistory.length; i++) {
      const str = Object.values(this.networkHistory[i]);
      console.log(str);
    }
  }

}
