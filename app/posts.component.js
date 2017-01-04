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
var core_1 = require("@angular/core");
var PostsComponent = (function () {
    function PostsComponent(_postsService) {
        this._postsService = _postsService;
        this.isLoading = true;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._postsService.getPosts().subscribe(function (posts) { return _this.posts = posts; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    return PostsComponent;
}());
PostsComponent = __decorate([
    core_1.Component({
        selector: 'posts',
        template: "\n      <h2>Posts</h2>\n      <spinner [visible]=\"isLoading\"></spinner>\n      <ul class=\"list-group col-md-6\">\n        <li *ngFor=\"let post of posts\" class=\"list-group-item\">{{post.title}}</li>\n      </ul>\n  "
    }),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], PostsComponent);
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=posts.component.js.map