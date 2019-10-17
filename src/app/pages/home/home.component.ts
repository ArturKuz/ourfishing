import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    loading;
    // currentUser: User;
    // users: User[] = [];

    constructor( ) { }

  ngOnInit() {

    this.loading = false;
    // test spiner
    //   setTimeout(() => {
    //     this.loading = false;
    //   }, 2000);
  }
}

