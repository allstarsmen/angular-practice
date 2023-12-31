import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';
import { Observable, of } from 'rxjs';
import { CATEGORIES } from '../mock-categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[] = CATEGORIES;

  constructor() { }

  getCategories(): Observable<Category[]> {
    return of(this.categories);
  }
}
