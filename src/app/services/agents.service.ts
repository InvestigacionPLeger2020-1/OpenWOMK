import { Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentsService {
private agents = new  Subject<any>();
agents$ = this.agents.asObservable();
  constructor() { }
  sendArray(agents: Array<any>){
    this.agents.next(agents);
  }
}
