import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormModule,
  InfoPanelModule,
  CardModule,
  ChartModule
} from '@sintef/wonka-ui';
import { ContainersComponent } from './containers.component';
import { InfoComponent } from '../info/info.component';
import { FormsComponent } from '../forms/forms.component';
import { CardsComponent } from '../cards/cards.component';
import { ChartsComponent } from '../charts/charts.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NavigationComponent } from 'src/app/examples/navigation/navigation.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ContainersComponent', () => {
  let component: ContainersComponent;
  let fixture: ComponentFixture<ContainersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormModule,
        InfoPanelModule,
        CardModule,
        ChartModule,
        ChartsModule,
        FormsModule,
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
    fixture = TestBed.createComponent(ContainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
