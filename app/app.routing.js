"use strict";
var prevent_unsaved_changes_guard_1 = require("./prevent-unsaved-changes-guard");
var user_component_1 = require("./user.component");
var users_component_1 = require("./users.component");
var home_component_1 = require("./home.component");
var posts_component_1 = require("./posts.component");
var notfound_component_1 = require("./notfound.component");
var router_1 = require("@angular/router");
exports.routing = router_1.RouterModule.forRoot([
    { path: '', component: home_component_1.HomeComponent },
    { path: 'users', component: users_component_1.UsersComponent },
    { path: 'user', component: user_component_1.UserComponent, canDeactivate: [prevent_unsaved_changes_guard_1.PreventUnsavedChangesGuard], },
    { path: 'user/:id', component: user_component_1.UserComponent, canDeactivate: [prevent_unsaved_changes_guard_1.PreventUnsavedChangesGuard], },
    { path: 'posts', component: posts_component_1.PostsComponent },
    { path: 'notfound', component: notfound_component_1.NotFoundComponent },
    { path: '**', redirectTo: '' },
]);
//# sourceMappingURL=app.routing.js.map