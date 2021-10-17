import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  constructor() { }
  results = new BehaviorSubject([]);
}
