import { Injectable } from '@angular/core';
import { CATEGORIES } from '../mock-categories';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }

  createDb() {
    return { categories: CATEGORIES };
  }
}
