import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private messageSubject = new BehaviorSubject<string>('');

  constructor() { }

  getMessage() {
    return this.messageSubject.asObservable();
  }

  setMessage(message: string) {
    this.messageSubject.next(message);
  }
}
