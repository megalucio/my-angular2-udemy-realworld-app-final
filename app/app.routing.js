"use strict";
var users_component_1 = require("./users.component");
var home_component_1 = require("./home.component");
var posts_component_1 = require("./posts.component");
var router_1 = require("@angular/router");
exports.routing = router_1.RouterModule.forRoot([
    { path: '', component: home_component_1.HomeComponent },
    { path: 'users', component: users_component_1.UsersComponent },
    { path: 'posts', component: posts_component_1.PostsComponent },
    { path: '**', redirectTo: '' },
]);
//# sourceMappingURL=app.routing.js.map