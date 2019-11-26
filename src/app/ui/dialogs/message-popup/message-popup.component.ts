import { Component,  Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';


@Component({
  selector: 'app-success',
  template: '<p>{{data}}</p>',
  styles: ['p { text-align: center;}']
})
export class MessagePopupComponent {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }

}
