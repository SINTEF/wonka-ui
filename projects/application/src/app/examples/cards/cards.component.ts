/** Example component for demonstrating various features of the SINTEFBasic application and the wonka-ui component library
 *  If needed, code from this component can be used. In that case, the component (with all 4 files) must be renamed, and
 *  references in app.module.ts must be updated.
 */
import { Component, Input } from '@angular/core';
import { Action, Card } from '../../../../../wonka-ui/src/lib/card/card';


/** Component for calling an API endpoint to get a list of cards and showing it in a table.
 *  Showing the list in a TableModule from wonka-ui.
 */
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['../css/examples.scss']
})
export class CardsComponent {
  cards: Card<any>[];
  explanation: string;

  constructor() {}

  ngOnInit() {

    this.explanation = `
    <b>Component for showing cards.</b>

    <i><b>Include component in html template:</b></i>
    < div *ngFor="let card of cards" id="card-card">
        < lib-app-card
         [card]="card">
        < /lib-app-card>
    < /div>

    <i><b>Define card items in ts file:</b></i>
    this.cards =  [ {
      input: 'Input for card 1',
      imageUrl: '/assets/img/wonka-2.png',
      title: 'Title card 1',
      description: 'A short description.',
      content: 'A more detailed description.',
      actions: [this.createWebAppAction('Web Page for card 1'), this.createAPIAction('API URL')]
    },
    {
      input: 'Input for card 2',
      imageUrl: '/assets/img/wonka-2.png',
      title: 'Title card 2',
      description: 'A short description.',
      content: 'A more detailed description.',
      actions: [this.createWebAppAction('Web Page for card 2'), this.createAPIAction('API URL')]
    },
    {
      input: 'Input for card 3',
      imageUrl: '/assets/img/wonka-2.png',
      title: 'Title card 3',
      description: 'A short description.',
      content: 'A more detailed description.',
      actions: [this.createWebAppAction('Web Page for card 3'), this.createAPIAction('API URL')]
    }] as Card<any>[];

    <i><b>Define action functions:</b></i>
    private createWebAppAction(webPageURL): Action {
      return new Action('Web application', () => {
        alert('Redirect to a web page.');
      });
    }

    private createAPIAction(APIURL): Action {
      return new Action('API', () => {
        alert('Redirect to the API specifications.');
      });
    }
    `;

    this.cards =  [ {
      input: 'Input for card 1',
      imageUrl: '/assets/img/wonka-2.png',
      title: 'Title card 1',
      description: 'A short description.',
      content: 'A more detailed description.',
      actions: [this.createWebAppAction('Web Page for card 1'), this.createAPIAction('API URL')]
    },
    {
      input: 'Input for card 2',
      imageUrl: '/assets/img/wonka-2.png',
      title: 'Title card 2',
      description: 'A short description.',
      content: 'A more detailed description.',
      actions: [this.createWebAppAction('Web Page for card 2'), this.createAPIAction('API URL')]
    },
    {
      input: 'Input for card 3',
      imageUrl: '/assets/img/wonka-2.png',
      title: 'Title card 3',
      description: 'A short description.',
      content: 'A more detailed description.',
      actions: [this.createWebAppAction('Web Page for card 3'), this.createAPIAction('API URL')]
  }] as Card<any>[];
  }

  private createWebAppAction(webPageURL): Action {
    return new Action('Web application', () => {
      alert('Redirect to a web page.');
    });
  }

  private createAPIAction(APIURL): Action {
    return new Action('API', () => {
      alert('Redirect to the API specifications.');
    });
  }
}
