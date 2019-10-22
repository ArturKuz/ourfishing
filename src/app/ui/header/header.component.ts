import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services';
import { HeadersSizeService } from 'src/app/services/headers-size.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild('mainHeader') mainHeader: ElementRef;
  isLoggedIn;
  subscription;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private headersSize: HeadersSizeService,
  ) { }

  ngOnInit() {
    this.checkStageUser();
    this.subscription = this.authService.isLoggedIn.subscribe( res => {
      this.isLoggedIn = res;
    });

    const {height} = this.mainHeader.nativeElement.getBoundingClientRect();
    this.headersSize.mainHeaderHeight = height;
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
