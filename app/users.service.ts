import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class UsersService{

    usersUrl = "https://jsonplaceholder.typicode.com/users";

    constructor(private _http: Http){}

    getUsers(){
        return this._http.get(this.usersUrl)
            .map(res => res.json());
    }

}