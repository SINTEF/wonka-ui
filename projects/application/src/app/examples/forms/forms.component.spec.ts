import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  InfoPanelModule,
  TableModule,
  ListModule,
  ChartModule,
  KeyValueUnitListModule,
  CardModule
} from '@sintef/wonka-ui';
import { FormsComponent } from './forms.component';
import { InfoComponent } from '../info/info.component';
import { CardsComponent } from '../cards/cards.component';
import { ContainersComponent } from '../containers/containers.component';
import { ChartsComponent } from '../charts/charts.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NavigationComponent } from '../navigation/navigation.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FormsComponent', () => {
  let component: FormsComponent;
  let fixture: ComponentFixture<FormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        KeyValueUnitListModule,
        ChartsModule,
        FormsModule,
        InfoPanelModule,
        TableModule,
        CardModule,
        ListModule,
        ChartsModule,
        ChartModule,
        ReactiveFormsModule,
        RouterTestingModule,
        AppRoutingModule
      ],
      declarations: [
        InfoComponent,
        ContainersComponent,
        FormsComponent,
        ChartsComponent,
        NavigationComponent,
        CardsComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
