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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var UserComponent = (function () {
    function UserComponent(fb) {
        this.userForm = fb.group({
            user: fb.group({
                name: ['', forms_1.Validators.required],
                email: ['', forms_1.Validators.required],
                phone: ['', forms_1.Validators.required]
            }),
            adress: fb.group({
                street: ['', forms_1.Validators.required],
                suite: ['', forms_1.Validators.required],
                city: ['', forms_1.Validators.required],
                zipCode: ['', forms_1.Validators.required]
            })
        });
    }
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'user',
        template: "\n    <h2>Add a User</h2>\n\n    <div class=\"row\">\n        <div class=\"col-md-6 well\">\n            <form [formGroup]=\"userForm\">\n                <fieldset formGroupName=\"user\">\n                    <legend>User</legend>\n                    <div class=\"form-group\">\n                        <label>Name</label>\n                        <input class=\"form-control\" formControlName=\"name\"/>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Email</label>\n                        <input class=\"form-control\" formControlName=\"email\"/>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Phone</label>\n                        <input class=\"form-control\" formControlName=\"phone\"/>\n                    </div>\n                </fieldset>\n                <fieldset formGroupName=\"adress\">\n                    <legend>Adress</legend>\n                    <div class=\"form-group\">\n                        <label>Street</label>\n                        <input class=\"form-control\" formControlName=\"street\"/>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Suite</label>\n                        <input class=\"form-control\" formControlName=\"suite\"/>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>City</label>\n                        <input class=\"form-control\" formControlName=\"city\"/>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>ZipCode</label>\n                        <input class=\"form-control\" formControlName=\"zipCode\"/>\n                    </div>\n                </fieldset>\n                <button type=\"submit\" class=\"btn btn-default\">Save</button>\n            </form>\n        </div>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map