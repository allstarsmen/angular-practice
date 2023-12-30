import { Component } from '@angular/core';
import { Category } from '../../interfaces/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  categories: Category[] = [
    {
      id: '1',
      name: 'cat1',
      parentId: '0'
    },
    {
      id: '2',
      name: 'cat2',
      parentId: '0'
    }
  ];
}
