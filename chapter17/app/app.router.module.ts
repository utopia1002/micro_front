import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CategoryComponent } from './category/category.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessageComponent } from './message/message.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { ContactComponent } from './contact/contact.component';

import { AuthGuard } from './auth.guard';

const AppRoutes: Routes = [
  {path:'', component: MainComponent, pathMatch:'full'},
  {path:'category', component: CategoryComponent},
  {path:'list/:category', component: ListComponent},
  {path:'list/:category/:id', component: DetailComponent},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'dashboard', component: DashboardComponent,
    children: [
      {path:'message', component: MessageComponent,},
      {path:'userinfo', component: UserinfoComponent,},
      {path:'logout', component: UserinfoComponent,},
      {path:'like', component: UserinfoComponent,},
    ],
    canActivate: [AuthGuard],
  },
  {path:'list/:category/:id/contact', component: ContactComponent ,
    canActivate: [AuthGuard]
  },
]

export const AppRouterModule = RouterModule.forRoot(AppRoutes, {useHash: true});
