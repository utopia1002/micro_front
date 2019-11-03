import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CategoryComponent } from './category/category.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const AppRoutes: Routes = [
  {path:'', component: MainComponent, pathMatch:'full'},
  {path:'category', component: CategoryComponent},
  {path:'list/:category', component: ListComponent},
  {path:'list/:category/:id', component: DetailComponent},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
]

export const AppRouterModule = RouterModule.forRoot(AppRoutes, {useHash: true});
