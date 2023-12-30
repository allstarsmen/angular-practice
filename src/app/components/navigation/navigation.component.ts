import { Component } from '@angular/core';
import routes from '../../app-routes';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent {
  allRoutes = routes;
}
