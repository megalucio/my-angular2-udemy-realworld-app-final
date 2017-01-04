import { Validators } from '@angular/forms';
import { PostsService } from './posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  template: `
      <h2>Posts</h2>
      <ul class="list-group col-md-6">
        <li *ngFor="let post of posts" class="list-group-item">{{post.title}}</li>
      </ul>
  `
})
export class PostsComponent implements OnInit{ 

  posts;

  constructor(private _postsService: PostsService){}

  ngOnInit(){
    this._postsService.getPosts().subscribe(
      posts => this.posts = posts,
      error => console.log(error)
    );
  }

}