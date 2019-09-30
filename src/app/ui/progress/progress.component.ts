import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  template: `
  <div class="progress row align--end justify--center">
    <div class="img"></div>
  </div>
  `,
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
