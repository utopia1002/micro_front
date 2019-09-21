import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouterModule } from './app.router.module'; //for Router

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CategoryComponent } from './category/category.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

import { HttpClientModule } from '@angular/common/http'; //for http

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CategoryComponent,
    ListComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,  //for http
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
