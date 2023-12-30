import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared.module";
import { CategoriesComponent } from "../pages/categories/categories.component";

const routes: Routes = [{ path: '', component: CategoriesComponent }];

@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})

export class CategoriesModule { }