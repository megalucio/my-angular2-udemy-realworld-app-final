import { PreventUnsavedChangesGuard } from './shared/prevent-unsaved-changes-guard';
import { UserComponent } from './users/user.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home.component';
import { PostsComponent } from './posts/posts.component';
import  { NotFoundComponent} from './notfound.component';
import { RouterModule, Routes } from '@angular/router';

export const routing = RouterModule.forRoot([
     { path: '', component: HomeComponent },
     { path: 'users', component: UsersComponent },
     { path: 'user', component: UserComponent, canDeactivate: [PreventUnsavedChangesGuard], },
     { path: 'user/:id', component: UserComponent, canDeactivate: [PreventUnsavedChangesGuard], },
     { path: 'posts', component: PostsComponent },
     { path: 'notfound', component: NotFoundComponent },
     { path: '**', redirectTo: ''},
]);