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
    `],
  template: `
      <h2>Posts</h2>
      <spinner [visible]="isLoading"></spinner>
      <div class="col-md-6">
      <ul class="list-group posts">
        <li *ngFor="let post of posts" 
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
        </div>
      </div>
  `
})
export class PostsComponent implements OnInit{ 

  posts;
  isLoading = true;
  currentPost;

  constructor(private _postsService: PostsService){}

  ngOnInit(){
    this._postsService.getPosts().subscribe(
      posts => this.posts = posts,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  onSelectPost(post){
    this.currentPost = post;
  }

}