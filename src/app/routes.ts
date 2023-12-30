import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CategoriesComponent } from "./categories/categories.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent }
];

export default routes;