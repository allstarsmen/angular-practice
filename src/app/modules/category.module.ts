import { NgModule } from "@angular/core";
import { CategoryComponent } from "../pages/category/category.component";
import { SharedModule } from "./shared.module";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
  { path: '', component: CategoryComponent }
];

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})

export class CategoryModule { }