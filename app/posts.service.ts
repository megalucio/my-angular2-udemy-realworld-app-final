import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class PostsService{

    postsUrl = "https://jsonplaceholder.typicode.com/posts";

    constructor(private _http: Http){}

    getPosts(filter?){

        let url = this.postsUrl;

        if(filter)
            url += "?userId=" + filter.userId;
        return this._http.get(url)
            .map(res => res.json());
    }
    
    getComments(postId){
        return this._http.get(this.getPostUrl(postId) + '/comments')
            .map(res => res.json());
    }

    getPost(postId){
        return this._http.get(this.getPostUrl(postId))
            .map(res => res.json());
    }

    createPost(post){
        return this._http.post(this.postsUrl, JSON.stringify(post))
            .map(res => res.json());
    }

    modifyPost(post){
        return this._http.put(this.getPostUrl(post.id), JSON.stringify(post))
            .map(res => res.json());
    }

    deletePost(postId){
        return this._http.delete(this.getPostUrl(postId))
            .map(res => res.json());
    }

    private getPostUrl(postId){
		return this.postsUrl + "/" + postId;
	}

}