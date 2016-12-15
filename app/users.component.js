"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var users_service_1 = require("./users.service");
var core_1 = require("@angular/core");
var UsersComponent = (function () {
    function UsersComponent(_usersService) {
        this._usersService = _usersService;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._usersService.getUsers()
            .subscribe(function (users) { return _this.users = users; });
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    core_1.Component({
        selector: 'users',
        template: "\n      <h2>Users</h2>\n\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            <th>Name</th>\n            <th>Email</th>\n            <th>Edit</th>\n            <th>Delete</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let user of users\">\n            <td>{{user.name}}</td>\n            <td>{{user.email}}</td>\n            <td><i class=\"glyphicon glyphicon-edit\"></i></td>\n            <td><i class=\"glyphicon glyphicon-remove\"></i></td>\n          </tr>\n         </tbody>\n      </table>\n  "
    }),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map