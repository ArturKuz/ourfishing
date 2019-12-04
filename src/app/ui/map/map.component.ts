import { Component, OnInit } from '@angular/core';

declare var ymaps: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    ymaps.ready().then(() => {
      new ymaps.Map('map', {
        center: [53.933182, 27.691027],
        zoom: 7,
        controls: []
      });
    });
  }
}
