import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventBindingComponent } from './eventBinding/eventBinding.component';
import { NgClassComponent } from './ngClass/ngClass.component';
import { NgStyleComponent } from './ngStyle/ngStyle.component';
import {PostComponent} from "./post/post.component";
import { Post2Component } from './post2/post2.component';
import { TwoWayBindingComponent } from './twoWayBinding/twoWayBinding.component';
import { WayBindingComponent } from './wayBinding/wayBinding.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    Post2Component,
    EventBindingComponent,
    WayBindingComponent,
    TwoWayBindingComponent,
    NgStyleComponent,
    NgClassComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
