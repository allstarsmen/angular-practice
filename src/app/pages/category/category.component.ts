import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  category = new FormGroup({
    name: new FormControl('')
  });

  onSubmit() {
    console.log(this.category.value);
    return;
  }
}
