import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouterModule } from './app.router.module'; //for Router

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CategoryComponent } from './category/category.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CategoryComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
