import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './navigation.component.html',
  styleUrls: ['../css/examples.scss']
})
export class NavigationComponent implements OnInit {

  explanation: string;

  constructor() { }

  ngOnInit() {

    /**
     * Adding demo text/code
     */
    this.explanation = `
    <b>Component for showing a Bulma-based navigation bar on a page.</b>

    <i><b>Include component in html template:</b></i>
    < lib-navigation-bar
      [logoClass]="'logo-class'"
      [headerClass]="'header-class'"
      [showSearch]="true"
      [menu]="menu"
      [showLoginMenuItem]="true"
      [dropdownMenu]="dropdownMenu"
      [showLoginButton]="true"
      [user]="user"
      [login]="'Log in'"
      [logout]="'Log out'"
      [logo]="'../../../assets/img/sintef-logo-white.svg'"
      (isAuthorized)="login($event)"
      (searchcriteria)="search($event)"></lib-navigation-bar>

    <i><b>Define parameters in ts file:</b></i>
    menu: [
      {name: 'Home', path: '/'},
      {name: 'Info', path: '/info-example'},
      {name: 'Forms', path: '/forms-example'},
      {name: 'Charts', path: '/charts-example'},
      {name: 'Containers', path: '/containers-example'},
      {name: 'Navigation', path: '/navigation-example'},
      {name: 'Settings', path: '/settings'}] as MenuElement[];

    dropdownMenu: [
        {name: 'Forms example', path: '/forms-example'},
        {name: 'Navigation example', path: '/navigation-example'}
      ]

    const user = {
      name: 'Demo User',
      email: 'user@sintef.no'
    } as User;

    <i><b>Define authorize function in ts file:</b></i>
    authorize(login: boolean) {
      alert('Logout button clicked. Login=' + login);
    }

    <i><b>Define search function in ts file:</b></i>
    search(criteria: string) {
      alert('Search event fired. Criteria=' + criteria);
    }
    `;

  }

}
