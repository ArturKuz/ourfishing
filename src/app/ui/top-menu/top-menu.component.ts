import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services';



@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  user;
  id;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {

    this.user = this.authService.currentUserValue;
    this.id = this.user.id;
  }

}
