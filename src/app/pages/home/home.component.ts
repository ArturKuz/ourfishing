import { Component, OnInit, HostListener } from '@angular/core';
import { User } from 'src/app/models/user';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services';
import { HeadersSizeService } from 'src/app/services/headers-size.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    loading;
    height;
    headerHeight;
    menuHeight;

    @HostListener('window:resize', ['$event'])
      onResize(event) {
      this.headersSize.windowInnerHeight = event.target.innerHeight;
    }

    constructor(
      private headersSize: HeadersSizeService) {
    }

  ngOnInit() {

    this.loading = false;
    this.headerHeight = this.headersSize.mainHeaderHeight;
    this.menuHeight = this.headersSize.navMenuHeight || 0;
    this.headersSize.windowHeight.subscribe(
      res => {
        this.height = res - this.headerHeight - this.menuHeight + 'px';
      }
    );
  }
}

