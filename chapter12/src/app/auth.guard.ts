import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private router:Router, private login:LoginService){}

  canActivate():boolean{
    if(!this.login.isAuthenicated()){
      console.log("invalid token");
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
