import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CategoryComponent } from './category/category.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

const AppRoutes: Routes = [
  {path:'', component: MainComponent, pathMatch:'full'},
  {path:'category', component: CategoryComponent},
  {path:'list/:category', component: ListComponent},
  {path:'list/:category/:id', component: DetailComponent},
]

export const AppRouterModule = RouterModule.forRoot(AppRoutes, {useHash: true});
