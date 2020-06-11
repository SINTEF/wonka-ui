import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Card } from '../../../../../wonka-ui/src/lib/card/card';
import { CardsComponent } from './cards.component';
import { FormsComponent } from '../forms/forms.component';
import { InfoComponent } from '../info/info.component';
import { ContainersComponent } from '../containers/containers.component';
import { ChartsComponent } from '../charts/charts.component';
import { InfoPanelComponent } from '../../../../../wonka-ui/src/lib/info/info-panel.component';
import { TableComponent } from '../../../../../wonka-ui/src/lib/containers/tables/table.component';
import { FormComponent } from '../../../../../wonka-ui/src/lib/forms/form.component';
import { ListComponent } from '../../../../../wonka-ui/src/lib/containers/lists/list.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MockComponent } from 'ng-mocks';
import { ChartComponent } from '../../../../../wonka-ui/src/lib/charts/chart.component';
import { KeyValueUnitListComponent } from '../../../../../wonka-ui/src/lib/containers/key-value-unit-lists/key-value-unit-list.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { CardComponent } from '../../../../../wonka-ui/src/lib/card/card.component';
import { By } from '@angular/platform-browser';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CardsComponent', () => {

  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ChartsModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        AppRoutingModule
      ],
      declarations: [
        KeyValueUnitListComponent,
        TableComponent,
        FormComponent,
        ListComponent,
        InfoComponent,
        ContainersComponent,
        FormsComponent,
        InfoPanelComponent,
        NavigationComponent,
        ChartsComponent,
        CardComponent,
        CardsComponent,
        MockComponent(ChartComponent)],
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
