import { Component, OnInit, OnDestroy } from '@angular/core';

import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isLoggedIn;
  subscription;

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.checkStageUser();
    this.subscription = this.authService.isLoggedIn.subscribe( res => {
      this.isLoggedIn = res;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log('unsubscri');
  }

  signIn() {
    this.router.navigate(['/login']);
  }

  signUp() {
    this.router.navigate(['/registration']);
  }

  checkStageUser() {
    if (this.authService.currentUserValue.authToken) {
      this.authService.setLoginState(true);
    } else {
      this.authService.setLoginState(false);
    }
  }

  logOut() {
  this.authService.logout();
  this.router.navigate(['/']);
  }
}
