import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent {
  allRoutes = [
    { path: '/', title: 'Home' },
    { path: '/categories', title: 'Categories' }
  ];
}
