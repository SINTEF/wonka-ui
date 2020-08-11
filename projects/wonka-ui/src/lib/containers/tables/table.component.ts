import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TableItem } from './table';

@Component({
  selector: 'lib-table',
  templateUrl: './table.component.html'
})

export class TableComponent implements OnInit {

  @Input() table: TableItem;
  @Input() class: string;

  @Output() rowSelected: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor() { }

  ngOnInit() {
    if (!this.class) {
      this.class = '';
    }
  }

  getTableId(id: string) {
    return 'table-' + id;
  }
  getThId(id: string) {
    return 'th-' + id;
  }
  getTrId(id: string) {
    return 'tr-' + id;
  }

  select(row: string[]) {
    this.rowSelected.emit(row);
  }

  trackByFn(index, item): any {
    return item.id;
  }

}
