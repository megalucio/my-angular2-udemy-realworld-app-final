import { Router } from '@angular/router';
import { UserValidators } from './user.validators';
import { UsersService } from './users.service';
import { Component} from '@angular/core';

import  {FormGroup, FormBuilder, Validators}   from '@angular/forms';

import {User} from './user';

@Component({
  selector: 'user',
  template: `
    <h2>Add a User</h2>

    <div class="row">
        <div class="col-md-6 well">
            <form [formGroup]="userForm" (ngSubmit)="onSaveUser()">
                <fieldset>
                    <legend>User</legend>
                    <div class="form-group">
                        <label>Name</label>
                        <input class="form-control" formControlName="name"/>
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
                        <input class="form-control" formControlName="email"/>
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
                        <input class="form-control" formControlName="phone"/>
                    </div>
                </fieldset>
                <fieldset formGroupName="address">
                    <legend>Adress</legend>
                    <div class="form-group">
                        <label>Street</label>
                        <input class="form-control" formControlName="street"/>
                    </div>
                    <div class="form-group">
                        <label>Suite</label>
                        <input class="form-control" formControlName="suite"/>
                    </div>
                    <div class="form-group">
                        <label>City</label>
                        <input class="form-control" formControlName="city"/>
                    </div>
                    <div class="form-group">
                        <label>ZipCode</label>
                        <input class="form-control" formControlName="zipCode"/>
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
export class UserComponent {

    userForm;

    constructor(fb: FormBuilder, private _usersService: UsersService, private _router: Router){
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

    onSaveUser(){

        console.log(this.userForm.value);

        this._usersService.createUser(this.userForm.value)
            .subscribe(
                user => console.log(user), 
                error => console.error(error),
                () => {
                        this.userForm.reset();
                        this._router.navigate(['users']);

                    }
            );
    }

}