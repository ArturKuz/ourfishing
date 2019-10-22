import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FishService } from 'src/app/services/fish.service';

@Component({
  selector: 'app-fish-info',
  templateUrl: './fish-info.component.html',
  styleUrls: ['./fish-info.component.scss']
})
export class FishInfoComponent implements OnInit {

  defaultFishImg = 'assets/img/d-fish.png';
  fishId;
  fish;

  constructor(
    private route: ActivatedRoute,
    private fishService: FishService) {
      this.fishId = route.snapshot.params.id;
      // console.log(route.snapshot.params.id);
  }

  ngOnInit() {
    this.fishService.getFishById(this.fishId).subscribe(
      res => {
        console.log(res);
        this.fish = res.data;
      },
      error => console.log(error)
    );
  }

}
