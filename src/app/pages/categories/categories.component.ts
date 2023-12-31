import { Component, OnInit } from '@angular/core';
import { Category } from '../../interfaces/category';
import { CategoryService } from '../../services/category.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  categories$: Observable<Category[]>;

  constructor(
    private categoryService: CategoryService
  ) {
    this.categories$ = this.categoryService.getCategories();
  }
}
