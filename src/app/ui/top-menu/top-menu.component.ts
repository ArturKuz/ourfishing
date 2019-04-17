import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.less']
})
export class TopMenuComponent implements OnInit {

  user={
    id: null,
    authToken: "",
    expiresIn: null,
    };
  id = null;

  constructor() { }

  ngOnInit() {

    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.id = this.user.id    
  }

}
