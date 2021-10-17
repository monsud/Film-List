import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor() { }
  history = new BehaviorSubject(JSON.parse(localStorage.getItem('rates')))

}
