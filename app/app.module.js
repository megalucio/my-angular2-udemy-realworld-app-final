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
var posts_service_1 = require("./posts.service");
var notfound_component_1 = require("./notfound.component");
var prevent_unsaved_changes_guard_1 = require("./prevent-unsaved-changes-guard");
var users_service_1 = require("./users.service");
var posts_component_1 = require("./posts.component");
var users_component_1 = require("./users.component");
var user_component_1 = require("./user.component");
var home_component_1 = require("./home.component");
var app_routing_1 = require("./app.routing");
var navbar_component_1 = require("./navbar.component");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            platform_browser_1.BrowserModule,
            app_routing_1.routing
        ],
        declarations: [
            app_component_1.AppComponent,
            navbar_component_1.NavbarComponent,
            home_component_1.HomeComponent,
            users_component_1.UsersComponent,
            user_component_1.UserComponent,
            posts_component_1.PostsComponent,
            notfound_component_1.NotFoundComponent
        ],
        providers: [
            users_service_1.UsersService,
            posts_service_1.PostsService,
            prevent_unsaved_changes_guard_1.PreventUnsavedChangesGuard
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map