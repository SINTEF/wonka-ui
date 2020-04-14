import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

/** Interface for representing menu object in <navigation-bar> */
export interface MenuElement {
  name: string;
  path: string;
}

/** Interface for representing user object in <navigation-bar> */
export interface User {
  name: string;
  email: string;
}

@Component({
  selector: 'lib-navigation-bar',
  templateUrl: './navigation-bar.component.html'
})
/** UI class for displaying a Bulma-based navigation bar.  */
export class NavigationBarComponent implements OnInit {

  /** attribute for setting style class of logo */
  @Input() logoClass?: string;
  /** attribute for setting style class of header */
  @Input() headerClass?: string;
  /** attribute for setting logo image */
  @Input() logo: string;
  /** attribute for setting header text */
  @Input() header?: string;
  /** attribute for showing login button */
  @Input() showLoginButton?: boolean;
  /** attribute for showing login menu item */
  @Input() showLoginMenuItem?: boolean;
  /** attribute for setting text on login button */
  @Input() login?: string;
  /** attribute for setting text on logout button */
  @Input() logout?: string;
  /** attribute for setting user object */
  @Input() user?: User;
  /** attribute for setting menu element */
  @Input() menu: MenuElement[];
  /** attribute for showing search bar */
  @Input() showSearch?: boolean;
  /** attribute for setting dropdown menu element */
  @Input() dropdownMenu?: MenuElement[];

  @Output() isAuthorized = new EventEmitter<boolean>();
  @Output() searchcriteria = new EventEmitter<string>();

  searchword: string;
  isLoggedIn: boolean;
  isActive: boolean;

  constructor() { }

  ngOnInit() {}

  authorize() {
    this.isAuthorized.emit(this.user !== (null || undefined));
  }

  searchThis() {
    this.searchcriteria.emit(this.searchword);
    const activeElement = document.activeElement as HTMLElement;
    if (activeElement) {
      activeElement.blur();
    }
  }

  toggleActive() {
    this.isActive = !this.isActive;
  }

  trackByFn(index, item): any {
    return item.id;
  }

}
