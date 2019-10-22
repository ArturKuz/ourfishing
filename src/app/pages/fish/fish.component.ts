import { Component, OnInit } from '@angular/core';
import { FishService } from 'src/app/services/fish.service';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.scss']
})
export class FishComponent implements OnInit {

  // fishes = [
  //   {name: 'Карась', id: '1'},
  //   {name: 'Окунь', id: '2'},
  //   {name: 'Щука', id: '5'},
  //   {name: 'Плотва', id: '6'},
  //   {name: 'Сом', id: '8'},
  // ];

  fishList;
  subscription;
  initPage = 1;
  totalPages;


  constructor(private fishService: FishService) { }

  ngOnInit() {
    this.subscription = this.fishService.getFishList(1, 10).subscribe(
      res => {
        //  console.log(res);
         this.fishList = res.data;
         this.totalPages = res.totalCount;
      },
      error => console.log(error),
    );
  }

}
