import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  Card,
  InfoPanelModule,
  TableModule,
  FormModule,
  ListModule,
  ChartModule,
  KeyValueUnitListModule,
} from '@sintef/wonka-ui';
import { CardsComponent } from './cards.component';
import { FormsComponent } from '../forms/forms.component';
import { InfoComponent } from '../info/info.component';
import { ContainersComponent } from '../containers/containers.component';
import { ChartsComponent } from '../charts/charts.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NavigationComponent } from '../navigation/navigation.component';
import { By } from '@angular/platform-browser';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CardsComponent', () => {

  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ChartModule,
        KeyValueUnitListModule,
        ChartsModule,
        FormsModule,
        InfoPanelModule,
        TableModule,
        FormModule,
        ListModule,
        ReactiveFormsModule,
        RouterTestingModule,
        AppRoutingModule
      ],
      declarations: [
        InfoComponent,
        ContainersComponent,
        FormsComponent,
        NavigationComponent,
        ChartsComponent,
        CardsComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    const c1: Card<any> = {
      title: 'My card',
      description: 'Short description',
      content: '<p>The description</p>',
    };
    component.cards = [c1];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should provide a div for each card', () => {
    const cardContainer = fixture.debugElement.query(By.css('.card-container')).nativeElement;
    expect(cardContainer).toBeDefined();

    const children = cardContainer.children;
    expect(children.length).toBe(3); // 3 cards in the example

    expect(children[0].getAttribute('id')).toBe('card-card');
    expect(children[1].getAttribute('id')).toBe('card-card');
    expect(children[2].getAttribute('id')).toBe('card-card');
  });
});
