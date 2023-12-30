import { NgModule } from "@angular/core";
import { CategoriesComponent } from "./categories.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [{ path: '', component: CategoriesComponent }];

@NgModule({
  declarations: [CategoriesComponent],
  imports: [RouterModule.forChild(routes)]
})

export class CategoriesModule { }