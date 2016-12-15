import { UsersService } from './users.service';
import { PostsComponent } from './posts.component';
import { UsersComponent } from './users.component';
import { HomeComponent } from './home.component';
import { routing } from './app.routing';
import { NavbarComponent } from './navbar.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

@NgModule({
  imports:      
  [ 
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
    PostsComponent
  ],
  providers:
  [
    UsersService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
