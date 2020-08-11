import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  TableModule,
  FormModule,
  ListModule,
  InfoPanelModule,
  KeyValueUnitListModule,
  CardModule
} from '@sintef/wonka-ui';
import { ChartsComponent } from './charts.component';
import { InfoComponent } from '../info/info.component';
import { ContainersComponent } from '../containers/containers.component';
import { FormsComponent } from '../forms/forms.component';
import { CardsComponent } from '../cards/cards.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NavigationComponent } from 'src/app/examples/navigation/navigation.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ChartsComponent', () => {
  let component: ChartsComponent;
  let fixture: ComponentFixture<ChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        KeyValueUnitListModule,
        ChartsModule,
        FormsModule,
        InfoPanelModule,
        TableModule,
        FormModule,
        ListModule,
        CardModule,
        ReactiveFormsModule,
        RouterTestingModule,
        AppRoutingModule
      ],
      declarations: [
        InfoComponent,
        ContainersComponent,
        FormsComponent,
        NavigationComponent,
        CardsComponent,
        ChartsComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
