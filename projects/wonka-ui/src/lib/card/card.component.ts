import { Component, Input } from '@angular/core';
import { Card, Action } from './card';


@Component({
  selector: 'lib-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() card: Card<any>;
  isExpanded = false;

  run(action: Action) {
    action.run();
  }

  toggleDescription() {
    this.isExpanded = !this.isExpanded;
  }
}
