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

    getUser(userId){
        return this._http.get(this.usersUrl + '/' + userId)
            .map(res => res.json());
    }

    createUser(user){
        return this._http.post(this.usersUrl, JSON.stringify(user))
            .map(res => res.json());
    }

    modifyUser(userId, user){
        return this._http.put(this.usersUrl + '/' + userId, JSON.stringify(user))
            .map(res => res.json());
    }

}