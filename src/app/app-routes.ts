import { Routes } from "@angular/router";
import { NotFoundComponent } from "./pages/not-found/not-found.component";

const routes: Routes = [
  {
    path: 'home',
    title: 'Home',
    loadChildren: () => import('./modules/home.module').then(module => module.HomeModule)
  },
  {
    path: 'categories',
    title: 'Categories',
    loadChildren: () => import('./modules/categories.module').then(module => module.CategoriesModule)
  },
  {
    path: 'category',
    title: 'New Category',
    loadChildren: () => import('./modules/category.module').then(module => module.CategoryModule)
  },
  {
    path: 'category/:id',
    title: 'Edit Category',
    loadChildren: () => import('./modules/category.module').then(module => module.CategoryModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

export default routes;