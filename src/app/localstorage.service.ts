import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  constructor() {}

  getData(key: string): any {
    return JSON.parse(localStorage.getItem(key) || '');
  }

  setData(key: string, value: any): any {
    return localStorage.setItem(key, JSON.stringify(value));
  }
}
