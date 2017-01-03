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
var router_1 = require("@angular/router");
var user_validators_1 = require("./user.validators");
var users_service_1 = require("./users.service");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
require("rxjs/add/operator/switchMap");
var UserComponent = (function () {
    function UserComponent(fb, _usersService, _router, _route) {
        this._usersService = _usersService;
        this._router = _router;
        this._route = _route;
        this.user = {
            name: '',
            email: '',
            phone: '',
            address: {
                street: '',
                suite: '',
                city: '',
                zipcode: ''
            }
        };
        this.userForm = fb.group({
            name: ['', forms_1.Validators.required],
            email: ['', user_validators_1.UserValidators.email],
            phone: [''],
            address: fb.group({
                street: [''],
                suite: [''],
                city: [''],
                zipCode: ['']
            })
        });
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this._router.url === '/user') {
            this.action = 'New ';
        }
        else {
            this.action = 'Edit ';
            this._route.params
                .switchMap(function (params) { return _this._usersService.getUser(params['id']); })
                .subscribe(function (user) { return _this.user = user; }, function (error) { return _this._router.navigate(['notfound']); });
        }
    };
    UserComponent.prototype.onSaveUser = function () {
        var _this = this;
        this._usersService.saveUser(this.userForm.value)
            .subscribe(function (user) { return console.log("User Saved"); }, function (error) { return console.error(error); }, function () {
            _this.userForm.reset();
            _this._router.navigate(['users']);
        });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'user',
        template: "\n    <h2>{{action}} User</h2>\n\n    <div class=\"row\">\n        <div class=\"col-md-6 well\">\n            <form [formGroup]=\"userForm\" (ngSubmit)=\"onSaveUser()\">\n                <fieldset>\n                    <legend>User</legend>\n                    <div class=\"form-group\">\n                        <label>Name</label>\n                        <input \n                            class=\"form-control\" \n                            formControlName=\"name\" \n                            [(ngModel)]=\"user.name\"/>\n                        <div \n                        *ngIf=\"\n                            this.userForm.controls['name'].invalid &&\n                            this.userForm.controls['name'].touched\n                            \"\n                        class=\"alert alert-danger\">\n                            Name is required\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Email</label>\n                        <input \n                            class=\"form-control\" \n                            formControlName=\"email\"\n                            [(ngModel)]=\"user.email\" />\n                         <div \n                        *ngIf=\"\n                            this.userForm.controls['email'].invalid &&\n                            this.userForm.controls['email'].touched\n                            \"\n                        class=\"alert alert-danger\">\n                            A valid email is required\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Phone</label>\n                        <input \n                            class=\"form-control\" \n                            formControlName=\"phone\"\n                            [(ngModel)]=\"user.phone\" />\n                    </div>\n                </fieldset>\n                <fieldset formGroupName=\"address\">\n                    <legend>Address</legend>\n                    <div class=\"form-group\">\n                        <label>Street</label>\n                        <input \n                            class=\"form-control\" \n                            formControlName=\"street\"\n                            [(ngModel)]=\"user.address.street\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Suite</label>\n                        <input \n                            class=\"form-control\" \n                            formControlName=\"suite\"\n                            [(ngModel)]=\"user.address.suite\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <label>City</label>\n                        <input \n                            class=\"form-control\" \n                            formControlName=\"city\"\n                            [(ngModel)]=\"user.address.city\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <label>ZipCode</label>\n                        <input \n                            class=\"form-control\" \n                            formControlName=\"zipCode\"\n                            [(ngModel)]=\"user.address.zipcode\" />\n                    </div>\n                </fieldset>\n                <button \n                    [disabled]=\"userForm.invalid\" \n                    type=\"submit\" \n                    class=\"btn btn-default\">\n                        Save\n                </button>\n            </form>\n        </div>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        users_service_1.UsersService,
        router_1.Router,
        router_1.ActivatedRoute])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map