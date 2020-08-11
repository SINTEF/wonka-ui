import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListItem } from './list';

@Component({
  selector: 'lib-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  @Input() items: ListItem[];
  @Input() header: string;
  @Input() boundary: string;
  @Input() class: string;

  @Output() itemSelected: EventEmitter<ListItem> = new EventEmitter<ListItem>();

  selectedItem: ListItem;
  constructor() { }

  ngOnInit() {
    if (!this.class) {
      this.class = '';
    }
  }

  select(item: ListItem) {
    this.selectedItem = item;
    this.itemSelected.emit(item);
  }

  isActive(item: ListItem) {
    return this.selectedItem === item;
  }

  trackByFn(index, item): any {
    return item.id;
  }
}
