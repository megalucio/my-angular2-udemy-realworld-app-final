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
var posts_service_1 = require("./posts.service");
var core_1 = require("@angular/core");
var PostsComponent = (function () {
    function PostsComponent(_postsService, _usersService) {
        this._postsService = _postsService;
        this._usersService = _usersService;
    }
    PostsComponent.prototype.ngOnInit = function () {
        this.loadPosts();
        this.loadUsers();
    };
    PostsComponent.prototype.loadUsers = function () {
        var _this = this;
        this._usersService.getUsers().subscribe(function (users) { return _this.users = users; }, function (error) { return console.log(error); });
    };
    PostsComponent.prototype.loadPosts = function (filter) {
        var _this = this;
        this.postsLoading = true;
        this._postsService.getPosts(filter).subscribe(function (posts) { return _this.posts = posts; }, function (error) { return console.log(error); }, function () { return _this.postsLoading = false; });
    };
    PostsComponent.prototype.onSelectPost = function (post) {
        var _this = this;
        this.comments = [];
        this.currentPost = post;
        this.loadingComments = true;
        this._postsService.getComments(post.id).subscribe(function (comments) { return _this.comments = comments; }, function (error) { return console.log(error); }, function () { return _this.loadingComments = false; });
    };
    PostsComponent.prototype.onSelectUser = function (filter) {
        this.loadPosts(filter);
    };
    return PostsComponent;
}());
PostsComponent = __decorate([
    core_1.Component({
        selector: 'posts',
        styles: ["\n        .posts li { cursor: default; }\n        .posts li:hover { background: #ecf0f1; } \n        .list-group-item.active, \n        .list-group-item.active:hover, \n        .list-group-item.active:focus { \n            background-color: #ecf0f1;\n            border-color: #ecf0f1; \n            color: #2c3e50;\n        }\n        .clickable {\n          cursor: pointer;\n        }\n        .thumbnail {\n          border-radius: 100%;\n        } \n    "],
        template: "\n      \n      <h2>Posts</h2>\n      <div class=\"col-md-6\">\n      <select #u (change)=\"onSelectUser({userId: u.value})\" name=\"users\" class=\"form-control\">\n        <option value=\"\">Select a User...</option>\n        <option *ngFor=\"let user of users\" value={{user.id}}>{{user.name}}</option>\n      </select>\n      <spinner [visible]=\"postsLoading\"></spinner>\n      <ul class=\"list-group posts\">\n        <li *ngFor=\"let post of posts\" \n            class=\"list-group-item\" \n            (click)=onSelectPost(post) \n            [class.active]=\"currentPost == post\">\n              {{post.title}}\n        </li>\n      </ul>\n      </div>\n      <div *ngIf=\"currentPost\" class=\"col-md-6\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">{{currentPost.title}}</h3>\n          </div>\n          <div class=\"panel-body\">\n            {{currentPost.body}}\n          </div>\n           <spinner [visible]=\"loadingComments\"></spinner>\n            <div *ngFor=\"let comment of comments\" class=\"media\">\n              <div class=\"media-left\">\n                <a href=\"#\">\n                  <img \n                    class=\"media-object thumbnail\" \n                    src=\"http://lorempixel.com/80/80/people?random={{comment.id}}\" \n                    alt=\"...\">\n                </a>\n              </div>\n              <div class=\"media-body\">\n                <h4 class=\"media-heading\">{{comment.name}}</h4>\n                {{comment.body}}\n              </div>\n            </div>\n        </div>\n      </div>\n  "
    }),
    __metadata("design:paramtypes", [posts_service_1.PostsService,
        users_service_1.UsersService])
], PostsComponent);
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=posts.component.js.map