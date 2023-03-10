import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserauGuard implements CanActivate {
  constructor(private logeds:AuthenticationService){}
  canActivate() {
      if (this.logeds.isloggedin()) {
        return true;
      } else {
        return false;
      }
  }
  
}
