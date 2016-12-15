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

  onClick(){

    this.usersActive = false;
    this.postsActive = false;

    if(this._router.isActive('users', true))
      this.usersActive =true;
    else if(this._router.isActive('posts', true))
      this.postsActive =true;

  }
}
