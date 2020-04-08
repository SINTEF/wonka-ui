import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


export interface TableColumnItem {
  columnName: string;
  width?: number;
}

export interface TableItem {
  id: string;
  tableHeader: string;
  cols: TableColumnItem[];
  data: string[][];
}

@Component({
  selector: 'lib-table',
  templateUrl: './table.component.html'
})

export class TableComponent implements OnInit {

  @Input() table: TableItem;
  @Output() rowSelected: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor() { }

  ngOnInit() {}

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
