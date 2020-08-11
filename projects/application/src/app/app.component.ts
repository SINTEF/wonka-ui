import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MenuElement, User } from '@sintef/wonka-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {

  @Output() loggedIn: boolean;
  @Output() user: User;
  menu: MenuElement[];
  dropdownMenu: MenuElement[];
  subscription: Subscription = new Subscription();

  constructor() {}

  ngOnInit() {
    this.user = {
      name: 'Demo User',
      email: 'user@domain.no'
    } as User;
    this.menu = environment.config.menu as MenuElement[];
    this.dropdownMenu = environment.config.dropdownMenu as MenuElement[];
  }

  authorize(isAuthorized: boolean) {
    alert('Logout button clicked. isAuthorized=' + isAuthorized);
  }

  search(criteria: string) {
    alert('Search event fired. Criteria=' + criteria);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
