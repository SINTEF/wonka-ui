import { Component, Input } from '@angular/core';

export interface Card<T> {
  input?: T;
  imageUrl?: string;
  title: string;
  description: string;
  content: string;
  actions?: Action[];
}

export class Action {

  myMethod: () => void;
  title: string;

  constructor(title: string, myMethod: () => void) {
    this.title = title;
    this.myMethod = myMethod;
  }

  run(): void {
    this.myMethod();
  }
}


@Component({
  selector: 'lib-app-card',
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
