import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class DataService {
  constructor() {}
  //Metod 1
  // dataEmitter = new EventEmitter<string>();
  // raiseDataEventEmitterEvent(data: string) {
  //  this.dataEmitter.emit(data);
  // }

  // Method:2 Using Subject
  dataEmitter = new Subject<string>();
  raiseDataEventEmitterEvent(data: string) {
    this.dataEmitter.next(data);
  }
}
