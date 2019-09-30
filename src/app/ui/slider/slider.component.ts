import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SliderComponent implements OnInit {

  config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: true,
    pagination: false,
    watchOverflow: true,
    preloadImages: true,
    // loop: true,
    // autoplay: {
    //   delay: 5000,
    // },
  };
  //  TEMP -----------
  sliderImg = [
    { name: 'boat', url: 'assets/img/slider/boat.jpg' },
    { name: 'summer', url: 'assets/img/slider/summer.jpg', },
    { name: 'food', url: 'assets/img/slider/food.jpg', },
    { name: 'plate', url: 'assets/img/slider/plate.jpg', },
  ]
  // -----------------

  slides=this.sliderImg;

  constructor() { }

  ngOnInit() {
  }

}
