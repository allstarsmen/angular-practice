import { Routes } from "@angular/router";

const routes: Routes = [
  { path: '', title: 'Home', loadChildren: () => import('./pages/home/home.module').then(module => module.HomeModule) },
  { path: 'categories', title: 'Categories', loadChildren: () => import('./pages/categories/categories.module').then(module => module.CategoriesModule) }
];

export default routes;