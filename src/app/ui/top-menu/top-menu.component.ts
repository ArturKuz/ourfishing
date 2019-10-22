import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthenticationService } from 'src/app/services';
import { HeadersSizeService } from 'src/app/services/headers-size.service';
@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  @ViewChild('navMenu') navMenu: ElementRef;
  id;

  constructor(
    private authService: AuthenticationService,
    private headersSize: HeadersSizeService) { }

  ngOnInit() {
    this.id = this.authService.currentUserValue.id;
    const {height} = this.navMenu.nativeElement.getBoundingClientRect();
    this.headersSize.navMenuHeight = height;
  }

}
