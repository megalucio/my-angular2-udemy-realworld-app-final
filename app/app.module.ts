import { PaginationComponent } from './pagination.component';
import { SpinnerComponnent } from './spinner.component';
import { PostsService } from './posts.service';
import { NotFoundComponent } from './notfound.component';
import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard';
import { UsersService } from './users.service';
import { PostsComponent } from './posts.component';
import { UsersComponent } from './users.component';
import { UserComponent } from './user.component';
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
