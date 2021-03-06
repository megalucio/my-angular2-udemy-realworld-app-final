import { UsersService } from '../users/users.service';
import { User } from '../users/user';
import { Validators } from '@angular/forms';
import { PostsService } from './posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  styles: [`
        .posts li { cursor: default; }
        .posts li:hover { background: #ecf0f1; } 
        .list-group-item.active, 
        .list-group-item.active:hover, 
        .list-group-item.active:focus { 
            background-color: #ecf0f1;
            border-color: #ecf0f1; 
            color: #2c3e50;
        }
        .clickable {
          cursor: pointer;
        }
        .thumbnail {
          border-radius: 100%;
        } 
    `],
  template: `
      
      <h2>Posts</h2>
      <div class="col-md-6">
      <select #u (change)="onSelectUser({userId: u.value})" name="users" class="form-control">
        <option value="">Select a User...</option>
        <option *ngFor="let user of users" value={{user.id}}>{{user.name}}</option>
      </select>
      <spinner [visible]="postsLoading"></spinner>
      <ul class="list-group posts">

        <pagination [items]="posts" [page-size]="pageSize" (page-changes)=onPageChanges($event)></pagination>
      
        <li *ngFor="let post of pagedPosts" 
            class="list-group-item" 
            (click)=onSelectPost(post) 
            [class.active]="currentPost == post">
              {{post.title}}
        </li>
      </ul>
      </div>
      <div *ngIf="currentPost" class="col-md-6">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">{{currentPost.title}}</h3>
          </div>
          <div class="panel-body">
            {{currentPost.body}}
          </div>
           <spinner [visible]="loadingComments"></spinner>
            <div *ngFor="let comment of comments" class="media">
              <div class="media-left">
                <a href="#">
                  <img 
                    class="media-object thumbnail" 
                    src="http://lorempixel.com/80/80/people?random={{comment.id}}" 
                    alt="...">
                </a>
              </div>
              <div class="media-body">
                <h4 class="media-heading">{{comment.name}}</h4>
                {{comment.body}}
              </div>
            </div>
        </div>
      </div>
  `
})
export class PostsComponent implements OnInit {

  posts = [];
  pagedPosts;
  comments;
  users;
  postsLoading;
  loadingComments;
  currentPost;
  pageSize = 10;

  constructor(
    private _postsService: PostsService,
    private _usersService: UsersService)
  { }

  ngOnInit() {
    this.loadPosts();
    this.loadUsers();
  }

  private loadUsers() {
    this._usersService.getUsers().subscribe(
      users => this.users = users,
      error => console.log(error)
    );
  }

  private loadPosts(filter?) {

    this.postsLoading = true;

    this._postsService.getPosts(filter).subscribe(
      posts => {
        this.posts = posts;
        this.pagedPosts = _.take(this.posts, this.pageSize);
      },
      error => console.log(error),
      () => this.postsLoading = false
    );
  }

  onSelectPost(post) {
    this.comments = [];
    this.currentPost = post;
    this.loadingComments = true;

    this._postsService.getComments(post.id).subscribe(
      comments => this.comments = comments,
      error => console.log(error),
      () => this.loadingComments = false
    );
  }

  onSelectUser(filter?) {
    this.loadPosts(filter);
  }

  onPageChanges(page) {
    var startIndex = (page - 1)*this.pageSize;
    this.pagedPosts = _.take(_.rest(this.posts, startIndex), this.pageSize);
  }

}