import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TableItem, TableColumnItem } from '../../../../../wonka-ui/src/lib/containers/tables/table.component';
import { ListItem } from '../../../../../wonka-ui/src/lib/containers/lists/list.component';
import { KeyValueUnitListItem } from '@sintef/wonka-ui';

@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['../css/examples.scss']
})
export class ContainersComponent implements OnInit {

  explanation1: string;
  explanation2: string;
  explanation3: string;
  listItems: ListItem[];

  tableItem: TableItem;
  tableData: string[][];

  listItem: KeyValueUnitListItem;

  subscription: Subscription = new Subscription();

  constructor() {}

  ngOnInit() {

    /**
     * Adding demo text/code
     */
    this.explanation1 = `
    <b>Component for showing selectable list items.</b>

    <i><b>Include component in html template:</b></i>
    < lib-multiple-select
      [header]="'Multiple select example'"
      [items]="items"
      [class]="'style-class'"
      (itemSelected)="show($event)"></lib-multiple-select>

    <i><b>Define itemSelected function in ts file:</b></i>
    show(event: ListItem) {
      alert('Item clicked: ' + JSON.stringify(event, null, 2));
    }

    <i><b>Define items in ts file:</b></i>
    this.items = [{
      id: 'ID1',
      name: 'Item 1',
      path: 'item/',
      description: 'This is item 1',
      header: 'Item 1 Header'
    }, {
      id: 'ID2',
      name: 'Item 2',
      path: 'item/',
      description: 'This is item 2',
      header: 'Item 2 Header'
    }];`;

    this.listItems = [{
      id: 'ID1',
      name: 'Item 1',
      path: 'item/',
      description: 'This is item 1',
      header: 'Item 1 Header'
    }, {
      id: 'ID2',
      name: 'Item 2',
      path: 'item/',
      description: 'This is item 2',
      header: 'Item 2 Header'
    }];


    this.explanation2 = `
    <b>Component for showing data in simple table.</b>

    <i><b>Include component in html template:</b></i>
    < lib-table
      [table]="tableItem"
      [class]="'style-class'"
      (rowSelected)="showRow($event)"></lib-table>

    <i><b>Define rowSelected function in ts file:</b></i>
    showRow(event: string[]) {
      alert('Row clicked: ' + JSON.stringify(event, null, 2));
    }

    <i><b>Define table item with data in ts file:</b></i>
    this.tableItem = {
      tableHeader: 'Table example',
      cols: [{
        columnName: 'Name',
        width: 60
      }, {
        columnName: 'Date',
        width: 25
      }, {
        columnName: 'Status',
        width: 15
      }] as TableColumn[],
      data: [
        ['Item 1', '21.12.2019', 'Approved'],
        ['Item 2', '23.12.2019', 'Approved'],
        ['Item 3', '02.01.2020', 'Rejected'],
        ['Item 4', '05.01.2020', 'Cancelled']
      ]
    } as TableItem;`;

    this.tableItem = {
      id: '123',
      tableHeader: 'Table example',
      cols: [{
        columnName: 'Name',
        width: 60
      }, {
        columnName: 'Date',
        width: 25
      }, {
        columnName: 'Status',
        width: 15
      }] as TableColumnItem[],
      data: [
        ['Item 1', '21.12.2019', 'Approved'],
        ['Item 2', '23.12.2019', 'Approved'],
        ['Item 3', '02.01.2020', 'Rejected'],
        ['Item 4', '05.01.2020', 'Cancelled']
      ]
    } as TableItem;

    this.listItem = {
      name: 'Key-value-unit list example',
      items: [
        {
          key: 'Distance',
          value: '100',
          unit: 'meters'
        }, {
          key: 'Temperature',
          value: '23',
          unit: '°C'
        }, {
          key: 'Time',
          value: '45',
          unit: 'seconds'
        }
      ]} as KeyValueUnitListItem;

    this.explanation3 = `
    <b>Component for showing key-value-unit items in a simple list.</b>

    <i><b>Include component in html template:</b></i>
    < lib-key-value-unit-list
      [class]="'style-class'"
      [listItem]="listItem"></lib-key-value-unit-list>

    <i><b>Define table item with data in ts file:</b></i>
    this.listItem = {
      name: 'Key-value-unit list example',
      items: [
        {
          key: 'Distance',
          value: '100',
          unit: 'meters'
        }, {
          key: 'Temperature',
          value: '23',
          unit: '°C'
        }, {
          key: 'Time',
          value: '45',
          unit: 'seconds'
        }
      ]} as KeyValueUnitListItem;`;

  }

  show(event: ListItem) {
    alert('Item clicked: ' + JSON.stringify(event, null, 2));
  }

  showRow(event: string[]) {
    alert('Row clicked: ' + JSON.stringify(event, null, 2));
  }

}
