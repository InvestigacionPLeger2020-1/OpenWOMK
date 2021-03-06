export class ABMdata {
  private seed: boolean;
  private data: object;
  private userType: number;
  private userLinksMin: number;
  private userLinksMax: number;
  private influenceMin: number;
  private influenceMax: number;
  private userParticipation: number;

  // tslint:disable-next-line:max-line-length
  constructor(seed: boolean, userLinksMin: number, userLinksMax: number, userParticipation, userType ?: number, influenceMin ?: number, influenceMax ?: number) {
    this.seed = seed;
    this.userLinksMin = userLinksMin;
    this.userLinksMax = userLinksMax;
    this.userParticipation = userParticipation;
    this.userType = userType === undefined ? null : userType;
    this.influenceMin = influenceMin === undefined ? null : influenceMin ;
    this.influenceMax = influenceMax === undefined ? null : influenceMin ;
  }

  /*constructor(ob: object) {
    this.data = ob;
  }*/


  public getSeed(): boolean {
    return this.seed;
  }

  public setSeed(value: boolean) {
    this.seed = value;
  }

  public getUserType(): number {
    return this.userType;
  }

  public setUserType(value: number) {
    this.userType = value;
  }

  public getUserLinksMin(): number {
    return this.userLinksMin;
  }

  public setUserLinksMin(value: number) {
    this.userLinksMin = value;
  }

  public getUserLinksMax(): number {
    return this.userLinksMax;
  }

  public setUserLinksMax(value: number) {
    this.userLinksMax = value;
  }

  public getInfluenceMin(): number {
    return this.influenceMin;
  }

  public setInfluenceMin(value: number) {
    this.influenceMin = value;
  }

  public getInfluenceMax(): number {
    return this.influenceMax;
  }

  public setInfluenceMax(value: number) {
    this.influenceMax = value;
  }

  public getUserParticipation(): number {
    return this.userParticipation;
  }

  public setUserParticipation(value: number) {
    this.userParticipation = value;
  }
}
