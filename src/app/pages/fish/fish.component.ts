import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.scss']
})
export class FishComponent implements OnInit {

  fishes = [
    {name: 'Карась', id: '1'},
    {name: 'Окунь', id: '2'},
    {name: 'Щука', id: '5'},
    {name: 'Плотва', id: '6'},
    {name: 'Сом', id: '8'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
