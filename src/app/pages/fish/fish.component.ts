import { Component, OnInit } from '@angular/core';
import { FishService } from 'src/app/services/fish.service';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.scss']
})
export class FishComponent implements OnInit {

  fishList;
  pageIndex = 1;
  pageSizeOptions: number[] = [5, 10, 20];
  totalPages;


  constructor(private fishService: FishService) { }

  ngOnInit() {
    this.requestFishList(this.pageIndex, this.pageSizeOptions[0]);
  }

  requestPage(paginatorData) {
    const {pageIndex, pageSize} = paginatorData;
    this.requestFishList(pageIndex + 1,  pageSize);
  }

  requestFishList(index, size) {
    this.fishService.getFishList(index, size).subscribe(
      res => {
         this.fishList = res.data;
         this.totalPages = res.totalCount;
        //  console.log(res);
      },
      error => console.log(error),
    );
  }
}
