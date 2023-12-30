import { Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    title: 'Home',
    loadChildren: () => import('./pages/home/home.module').then(module => module.HomeModule)
  },
  {
    path: 'categories',
    title: 'Categories',
    loadChildren: () => import('./pages/categories/categories.module').then(module => module.CategoriesModule)
  },
  {
    path: 'category',
    title: 'New Category',
    loadChildren: () => import('./pages/category/category.module').then(module => module.CategoryModule)
  },
  {
    path: 'category/:id',
    title: 'Edit Category',
    loadChildren: () => import('./pages/category/category.module').then(module => module.CategoryModule)
  }
];

export default routes;