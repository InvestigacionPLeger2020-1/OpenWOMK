export class ABMdata {
  private _seed: boolean;
  private _userType: number;
  private _userLinksMin: number;
  private _userLinksMax: number;
  private _influenceMin: number;
  private _influenceMax: number;
  private _userParticipation: number;

  constructor(seed: boolean, userLinksMin: number, userLinksMax: number, userParticipation, userType ?: number, influenceMin ?: number, influenceMax ?: number) {
    this._seed = seed;
    this._userLinksMin = userLinksMin;
    this._userLinksMax = userLinksMax;
    this._userParticipation = userParticipation;
    this._userType = userType === undefined ? this._userType : null;
    this._influenceMin = influenceMin === undefined ? this._influenceMin : null;
    this._influenceMax = influenceMax === undefined ? this._influenceMin : null;
  }


  get seed(): boolean {
    return this._seed;
  }

  set seed(value: boolean) {
    this._seed = value;
  }

  get userType(): number {
    return this._userType;
  }

  set userType(value: number) {
    this._userType = value;
  }

  get userLinksMin(): number {
    return this._userLinksMin;
  }

  set userLinksMin(value: number) {
    this._userLinksMin = value;
  }

  get userLinksMax(): number {
    return this._userLinksMax;
  }

  set userLinksMax(value: number) {
    this._userLinksMax = value;
  }

  get influenceMin(): number {
    return this._influenceMin;
  }

  set influenceMin(value: number) {
    this._influenceMin = value;
  }

  get influenceMax(): number {
    return this._influenceMax;
  }

  set influenceMax(value: number) {
    this._influenceMax = value;
  }

  get userParticipation(): number {
    return this._userParticipation;
  }

  set userParticipation(value: number) {
    this._userParticipation = value;
  }
}
