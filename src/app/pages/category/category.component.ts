import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../interfaces/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  categoryId: string | undefined;
  category = new FormGroup({
    name: new FormControl('')
  });

  constructor(
    private route: ActivatedRoute
  ) {
    this.categoryId = this.route.snapshot.params['id'];
  }

  onSubmit() {
    const updatedCategory = { ...this.category.value, parentId: '' } as Category;
    if (this.categoryId) {
      updatedCategory.id = this.categoryId;
    }
    console.log(updatedCategory);
    return;
  }
}
