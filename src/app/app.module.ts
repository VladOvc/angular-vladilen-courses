import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventBindingComponent } from './eventBinding/eventBinding.component';
import {PostComponent} from "./post/post.component";
import { Post2Component } from './post2/post2.component';
import { WayBindingComponent } from './wayBinding/wayBinding.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    Post2Component,
    EventBindingComponent,
    WayBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
