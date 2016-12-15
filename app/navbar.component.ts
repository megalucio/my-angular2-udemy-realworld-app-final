import { Component } from '@angular/core';

import { Router} from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './app/navbar-component.component.html'
})
export class NavbarComponent {

  usersActive = false;
  postsActive = false;

  constructor(private _router: Router){} 

  isCurrentRoute(route){
    return this._router.isActive(route,true);
  }
}
