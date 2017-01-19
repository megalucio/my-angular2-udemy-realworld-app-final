import { PaginationComponent } from './shared/pagination.component';
import { SpinnerComponnent } from './shared/spinner.component';
import { PostsService } from './posts/posts.service';
import { NotFoundComponent } from './notfound.component';
import { PreventUnsavedChangesGuard } from './shared//prevent-unsaved-changes-guard';
import { UsersService } from './users/users.service';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user.component';
import { HomeComponent } from './home.component';
import { routing } from './app.routing';
import { NavbarComponent } from './navbar.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports:      
  [ 
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserModule,
    routing
  ],
  declarations: 
  [ 
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    NotFoundComponent,
    SpinnerComponnent,
    PaginationComponent
  ],
  providers:
  [
    UsersService,
    PostsService,
    PreventUnsavedChangesGuard
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
