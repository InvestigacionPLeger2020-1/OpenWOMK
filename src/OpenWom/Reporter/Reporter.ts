
export class Reporter {
  private networkHistory: Array<any>;

  constructor() {
    this.networkHistory = [];
  }

  public addHistory(newHistory: Array<any>): void {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < newHistory.length; i++) {
       // console.log(newHistory[i]);
      this.networkHistory.push(newHistory[i]);
    }
  }

  public consoleLogNetwork(): void {
    console.log(Object.keys(this.networkHistory[0]));
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.networkHistory.length; i++) {
      const str = Object.values(this.networkHistory[i]);
      console.log(str);
    }
  }

  public getNetworkHistory(): Array<any> {
    return this.networkHistory;
  }

}
