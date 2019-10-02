import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn;
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.authService.isLoggedIn.subscribe( res => this.isLoggedIn = res);
    this.chechStageUser();
    console.log('this.isLoggedIn', this.isLoggedIn);
  }

  signIn() {
    this.router.navigate(['/login']);
  }

  signUp() {
    this.router.navigate(['/registration']);
  }

  chechStageUser() {
    if (this.authService.currentUserValue.token) {
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
