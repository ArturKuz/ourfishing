import { Injectable, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeadersSizeService {

  private _mainHeaderHeight;
  private _navMenuHeight;
  windowHeight = new BehaviorSubject<number>(null);

  constructor() { }

  set mainHeaderHeight(height) {
    this._mainHeaderHeight = height;
  }

  get mainHeaderHeight() {
    return this._mainHeaderHeight;
  }

  set navMenuHeight(height) {
    this._navMenuHeight = height;
  }

  get navMenuHeight() {
    return this._navMenuHeight;
  }

  set windowInnerHeight(height) {
    this.windowHeight.next(height);
  }

}
