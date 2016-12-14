import { UsersComponent } from './users.component';
import { HomeComponent } from './home.component';
import { PostsComponent } from './posts.component';
import { RouterModule, Routes } from '@angular/router';

export const routing = RouterModule.forRoot([
     { path: '', component: HomeComponent },
     { path: 'users', component: UsersComponent },
     { path: 'posts', component: PostsComponent },
     { path: '**', redirectTo: ''},
]);