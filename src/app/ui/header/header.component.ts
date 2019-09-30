import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( 
    private router: Router,
    private authenticationService: AuthenticationService,) { }

  ngOnInit() {
    this.isLoggedIn();
  }
  signIn(){
    this.router.navigate(['/login']);
  }
  signUp(){
    this.router.navigate(['/registration']);
  }
  isLoggedIn(){
    if( localStorage.getItem('currentUser')){
      return true;
    }
    {
      return false;
    }
  }
  logOut(){
  this.authenticationService.logout()
  this.router.navigate(['/'])
  } 
}
