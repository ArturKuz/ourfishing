import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { state, trigger, style, transition, animate } from '@angular/animations';
import { interval } from 'rxjs';

@Component({
  selector: 'app-arrow',
  template: `
  <div class="arrow-for-scroll"
    #arrow
    (click)="scrolling()"
    [@upAndDown]="isUp ? 'up' : 'down'">
  </div> `,
  styles:[`
  .arrow-for-scroll {
    position: absolute;
    bottom: 75px;
    left: calc(50% - 10px);
    width: 20px;
    height: 20px;
    border-right: 4px solid #eee;
    border-bottom: 4px solid #eee;
    cursor: pointer;
    transform: rotate(45deg);
    }
  `],
  animations: [
    trigger('upAndDown', [
      state('up', style({
        transform: 'translateY(0) rotate(45deg)',
      })),
      state('down', style({
        transform: 'translateY(-15px) rotate(45deg)',

      })),
      transition('* => *', animate('1s')),
    ])
  ]
})
export class ArrowComponent implements OnInit {

  @ViewChild('arrow') arrow: ElementRef;

  isUp = false;

  constructor() { }

  ngOnInit() {
    const secondsCounter = interval(1100);
    const counterSubscription = secondsCounter.subscribe(() => {
      this.isUp = !this.isUp;
    });
  }

  scrolling() {
    let {x} = this.arrow.nativeElement.getBoundingClientRect()
    window.scrollTo({
      top: x,
      behavior: 'smooth',
    })
  }
}
