import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services';



@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  id;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.id = this.authService.currentUserValue.id;
  }

}
