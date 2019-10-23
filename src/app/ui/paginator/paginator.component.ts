import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input() length: number;
  @Input() pageSize: number;
  @Input() pageSizeOptions: number[];
  @Output() paginatorEvent = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
  pageEvent(data) {
    this.paginatorEvent.emit(data);
  }
}
