import { Component, OnInit, Input } from '@angular/core';

export interface KeyValueUnitListItem {
  name: string;
  items: Array<{
    key: string;
    value: string;
    unit: string;
  }>;
}

@Component({
  selector: 'lib-key-value-unit-list',
  templateUrl: './key-value-unit-list.component.html'
})
export class KeyValueUnitListComponent implements OnInit {

  @Input() listItem: KeyValueUnitListItem;

  keySize: string;
  valueSize: string;
  name: string;
  constructor() { }

  ngOnInit() {
    this.keySize = '65%';
    this.valueSize = '35%';
    this.name = this.listItem.name ? this.listItem.name : '';
  }

  trackByFn(index, item): any {
    return item.id;
  }

}

