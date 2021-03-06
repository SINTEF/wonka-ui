import { Component, OnInit, Input } from '@angular/core';
import { KeyValueUnitListItem } from './key-value-unit-list';

@Component({
  selector: 'lib-key-value-unit-list',
  templateUrl: './key-value-unit-list.component.html'
})
export class KeyValueUnitListComponent implements OnInit {

  @Input() listItem: KeyValueUnitListItem;
  @Input() class: string;

  keySize: string;
  valueSize: string;
  name: string;
  constructor() { }

  ngOnInit() {
    if (!this.class) {
      this.class = '';
    }
    this.keySize = '65%';
    this.valueSize = '35%';
    this.name = this.listItem.name ? this.listItem.name : '';
  }

  trackByFn(index, item): any {
    return item.id;
  }

}

