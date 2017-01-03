import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserValidators } from './user.validators';
import { UsersService } from './users.service';
import { Component, OnInit} from '@angular/core';

import  {FormGroup, FormBuilder, Validators}   from '@angular/forms';

import {User} from './user';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'user',
  template: `
    <h2>{{title}}</h2>

    <div class="row">
        <div class="col-md-6 well">
            <form [formGroup]="userForm" (ngSubmit)="onSaveUser()">
                <fieldset>
                    <legend>User</legend>
                    <div class="form-group">
                        <label>Name</label>
                        <input 
                            class="form-control" 
                            formControlName="name" 
                            [(ngModel)]="user.name"/>
                        <div 
                        *ngIf="
                            this.userForm.controls['name'].invalid &&
                            this.userForm.controls['name'].touched
                            "
                        class="alert alert-danger">
                            Name is required
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input 
                            class="form-control" 
                            formControlName="email"
                            [(ngModel)]="user.email" />
                         <div 
                        *ngIf="
                            this.userForm.controls['email'].invalid &&
                            this.userForm.controls['email'].touched
                            "
                        class="alert alert-danger">
                            A valid email is required
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Phone</label>
                        <input 
                            class="form-control" 
                            formControlName="phone"
                            [(ngModel)]="user.phone" />
                    </div>
                </fieldset>
                <fieldset formGroupName="address">
                    <legend>Address</legend>
                    <div class="form-group">
                        <label>Street</label>
                        <input 
                            class="form-control" 
                            formControlName="street"
                            [(ngModel)]="user.address.street" />
                    </div>
                    <div class="form-group">
                        <label>Suite</label>
                        <input 
                            class="form-control" 
                            formControlName="suite"
                            [(ngModel)]="user.address.suite" />
                    </div>
                    <div class="form-group">
                        <label>City</label>
                        <input 
                            class="form-control" 
                            formControlName="city"
                            [(ngModel)]="user.address.city" />
                    </div>
                    <div class="form-group">
                        <label>ZipCode</label>
                        <input 
                            class="form-control" 
                            formControlName="zipCode"
                            [(ngModel)]="user.address.zipcode" />
                    </div>
                </fieldset>
                <button 
                    [disabled]="userForm.invalid" 
                    type="submit" 
                    class="btn btn-default">
                        Save
                </button>
            </form>
        </div>
    </div>
  `
})
export class UserComponent implements OnInit{

    userForm;
    user = new User();
    
    title;
    id;

    constructor(fb: FormBuilder, 
        private _usersService: UsersService, 
        private _router: Router, 
        private _route: ActivatedRoute){
            this.userForm = fb.group({
                name: ['',Validators.required],
                email: ['', UserValidators.email],
                phone: [''],
                address: fb.group({
                    street: [''],
                    suite: [''],
                    city: [''],
                    zipCode: ['']
                })
            });
    }

    ngOnInit(){

        this.id = this._route.snapshot.params['id'];

        if(!this.id){

            this.title = 'New User';

        }else{

            this.title = 'Edit User';

            this._usersService.getUser(this.id)
            .subscribe(
                    user => this.user = user,
                    response => {
                        if(response.status == 404)
                          this._router.navigate(['notfound']);
                    }
            );  
        }
   
    }

    onSaveUser(){

         if(!this.id){

            this._usersService.createUser(this.user)
                .subscribe(
                    user => console.log("User Created"), 
                    error => console.error(error),
                    () => {
                            this.userForm.reset();
                            this._router.navigate(['users']);
                        }
                );
         }
         else{
              this._usersService.modifyUser(this.id, this.user)
                .subscribe(
                    user => console.log("User Modified"), 
                    error => console.error(error),
                    () => {
                            this.userForm.reset();
                            this._router.navigate(['users']);
                        }
                );
         }
    }

}