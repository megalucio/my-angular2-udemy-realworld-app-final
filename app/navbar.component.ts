import { Component } from '@angular/core';
@Component({
  selector: 'navbar',
  template: `
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">ngProject</a>
          </div>
          <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
              <li><a href="#">Users</a></li>
              <li><a href="#">Posts</a></li>
            </ul>
          </div>
        </div>
      </nav>
  `
})
export class NavbarComponent { }
