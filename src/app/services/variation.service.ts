import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VariationService {

  private probability = new Subject<number>();
  probability$ = this.probability.asObservable();

  constructor() {
  }

  sendProbability(probability: number) {
    this.probability.next(probability);
  }
}
