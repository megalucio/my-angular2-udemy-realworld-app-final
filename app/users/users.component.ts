import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar.component';
import { UsersService } from './users.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'users',
  styles:[`
      .glyphicon-edit:hover {
        cursor: pointer;
      }
      .glyphicon-remove:hover {
        cursor: pointer;
      }
      `
    ],
  template: `
      <h2>Users</h2>
      <br>
      <div>
        <a class="btn btn-primary" routerLink='/user'>Add User</a>
      </div>
      <br>
      <div>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let user of users">
              <td>{{user.name}}</td>
              <td>{{user.email}}</td>
              <td><i (click)="onEdit(user.id)" class="glyphicon glyphicon-edit clickable"></i></td>
              <td><i (click)="onDelete(user)"class="glyphicon glyphicon-remove clickable"></i></td>
            </tr>
          </tbody>
        </table>
      </div>
  `
  
})

export class UsersComponent implements OnInit{

  users;

  constructor(private _usersService: UsersService, private _router: Router){} 

  ngOnInit(){
    this._usersService.getUsers()
      .subscribe(users => this.users = users);
  }

  onEdit(userId){
    this._router.navigate(['user', userId]);
  }

   onDelete(user){
      if (confirm("Are you sure you want to delete " + user.name + "?")) {
		
      let index = this.users.indexOf(user)

      this.users.splice(index, 1);

			this._usersService.deleteUser(user.id)
				.subscribe(null, 
					err => {
						alert("Could not delete the user.");
						this.users.splice(index, 0, user);
					});
		}

   }

}