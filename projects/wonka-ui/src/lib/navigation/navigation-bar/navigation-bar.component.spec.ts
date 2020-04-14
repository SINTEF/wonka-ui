import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NavigationBarComponent } from './navigation-bar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('NavigationBarComponent', () => {
  let component: NavigationBarComponent;
  let fixture: ComponentFixture<NavigationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationBarComponent ],
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      providers: [
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    const headerClass = 'header-class';
    const logo = 'image.jpg';
    const header = 'header';
    const showLoginButton = true;
    const login = 'Log in';
    const logout = 'Log out';
    const menu = [{name : 'menuelem1', path : 'path1'}, {name : 'menuelem2', path : 'path2'}];
    const showSearch = true;

    fixture = TestBed.createComponent(NavigationBarComponent);
    component = fixture.componentInstance;
    component.headerClass = headerClass;
    component.logo = logo;
    component.header = header;
    component.showLoginButton = showLoginButton;
    component.login = login;
    component.logout = logout;
    component.menu = menu;
    component.showSearch = showSearch;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not be clickable when logged out ', () => {
    const div1 = fixture.debugElement.query(By.css('#loggedOut'));
    expect(div1).toBeTruthy();
    const div2 = fixture.debugElement.query(By.css('#loggedIn'));
    expect(div2).toBeFalsy();
  });

  it('should show Log in button when logged out ', () => {
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(button.textContent).toContain('Log in');
    expect(button.textContent).not.toContain('Log out');
  });

  it('should be clickable when logged in ', () => {
    component.user = {name: 'userName', email: 'emailAddress'};
    fixture.detectChanges();

    const div1 = fixture.debugElement.query(By.css('#loggedOut'));
    expect(div1).toBeFalsy();
    const div2 = fixture.debugElement.query(By.css('#loggedIn'));
    expect(div2).toBeTruthy();
  });

  it('should show Log out button when logged in ', () => {
    component.user = {name: 'userName', email: 'emailAddress'};
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(button.textContent).not.toContain('Log in');
    expect(button.textContent).toContain('Log out');
  });

  it('should show header and logo', () => {
    const header = fixture.debugElement.query(By.css('.header-class')).nativeElement;
    const img = fixture.debugElement.query(By.css('img'));

    expect(header.textContent).toContain('header');
    expect(img).toBeTruthy();
  });

  it('should emit when log in button is clicked', () => {
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    spyOn(component.isAuthorized, 'emit');
    button.click();
    expect(component.isAuthorized.emit).toHaveBeenCalled();
  });

  it('should emit when search button is clicked', () => {
    const searchBtn = fixture.debugElement.query(By.css('.input-line')).nativeElement;
    spyOn(component.searchcriteria, 'emit');
    searchBtn.click();
    expect(component.searchcriteria.emit).toHaveBeenCalled();
  });

});
