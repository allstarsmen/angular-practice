import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Category } from '../interfaces/category';
import { HttpErrorHandlerService } from './http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoriesUrl = 'api/categories';
  categories: Category[] = [];

  constructor(
    private http: HttpClient,
    private errorHandlerService: HttpErrorHandlerService
  ) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl)
      .pipe(
        catchError(this.errorHandlerService.handleError<Category[]>('getCategories', []))
      );
  }
}
