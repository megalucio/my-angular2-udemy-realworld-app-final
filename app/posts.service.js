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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var PostsService = (function () {
    function PostsService(_http) {
        this._http = _http;
        this.postsUrl = "https://jsonplaceholder.typicode.com/posts";
    }
    PostsService.prototype.getPosts = function () {
        return this._http.get(this.postsUrl)
            .map(function (res) { return res.json(); });
    };
    PostsService.prototype.getComments = function (postId) {
        return this._http.get(this.getPostUrl(postId) + '/comments')
            .map(function (res) { return res.json(); });
    };
    PostsService.prototype.getPost = function (postId) {
        return this._http.get(this.getPostUrl(postId))
            .map(function (res) { return res.json(); });
    };
    PostsService.prototype.createPost = function (post) {
        return this._http.post(this.postsUrl, JSON.stringify(post))
            .map(function (res) { return res.json(); });
    };
    PostsService.prototype.modifyPost = function (post) {
        return this._http.put(this.getPostUrl(post.id), JSON.stringify(post))
            .map(function (res) { return res.json(); });
    };
    PostsService.prototype.deletePost = function (postId) {
        return this._http.delete(this.getPostUrl(postId))
            .map(function (res) { return res.json(); });
    };
    PostsService.prototype.getPostUrl = function (postId) {
        return this.postsUrl + "/" + postId;
    };
    return PostsService;
}());
PostsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map