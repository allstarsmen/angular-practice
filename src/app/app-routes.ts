import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { CategoriesComponent } from "./pages/categories/categories.component";

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'categories', component: CategoriesComponent, title: 'Categories' }
];

export default routes;