import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard';
import { UserComponent } from './user.component';
import { UsersComponent } from './users.component';
import { HomeComponent } from './home.component';
import { PostsComponent } from './posts.component';
import { RouterModule, Routes } from '@angular/router';

export const routing = RouterModule.forRoot([
     { path: '', component: HomeComponent },
     { path: 'users', component: UsersComponent },
     { path: 'user', component: UserComponent, canDeactivate: [PreventUnsavedChangesGuard]},
     { path: 'posts', component: PostsComponent },
     { path: '**', redirectTo: ''},
]);