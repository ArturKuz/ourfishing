import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class SliderComponent implements OnInit {

  //  TEMP -----------
  sliderImg = [
    {name: 'boat', url: 'assets/img/slider/boat.jpg'},
    {name: 'summer', url: 'assets/img/slider/summer.jpg',},
    {name: 'food', url: 'assets/img/slider/food.jpg',},
    {name: 'plate', url: 'assets/img/slider/plate.jpg',},
  ]  
  // -----------------
  constructor() { }

  ngOnInit() {
  }

}
