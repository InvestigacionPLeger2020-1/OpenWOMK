import {EventEmitter, Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private myMessage = new Subject<object>();
  // serialize objeto
  // ctrl+shift+r
  // How to inspect an object
  message$ = this.myMessage.asObservable();

  constructor() { }
  sendMessage(message: object){
    this.myMessage.next(message);
  }
  /*getMessage(): Observable<string> {
    return this.myMessage.asObservable();
  }
  updateMessage(message: string) {
    this.myMessage.next(message);
  }*/
  // environment$ = new EventEmitter<string>();
}
