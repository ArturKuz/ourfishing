import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // const currentUser = this.authService.currentUserValue;
    // if (currentUser) {
    //   return true;
    // }

    // this.router.navigate(['/login']);
    // return false;

    return this.authService.isLoggedIn.pipe(
      map(status => {
        console.log('status', status);
        if (status) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      }));
  }
}
