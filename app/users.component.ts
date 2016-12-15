import { UsersService } from './users.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'users',
  template: `
      <h2>Users</h2>

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
            <td><i class="glyphicon glyphicon-edit"></i></td>
            <td><i class="glyphicon glyphicon-remove"></i></td>
          </tr>
         </tbody>
      </table>
  `
})

export class UsersComponent implements OnInit{

  users;

  constructor(private _usersService: UsersService){} 

  ngOnInit(){
    this._usersService.getUsers()
      .subscribe(users => this.users = users);
  }


}