import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  TableModule,
  FormModule,
  ListModule,
  InfoPanelModule,
  KeyValueUnitListModule,
  CardModule,
  ChartModule
} from '@sintef/wonka-ui';
import { NavigationComponent } from './navigation.component';
import { ContainersComponent } from '../containers/containers.component';
import { FormsComponent } from '../forms/forms.component';
import { ChartsComponent } from '../charts/charts.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { InfoComponent } from 'src/app/examples/info/info.component';
import { CardsComponent } from '../cards/cards.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TableModule,
        FormModule,
        ListModule,
        InfoPanelModule,
        KeyValueUnitListModule,
        CardModule,
        ChartModule,
        ReactiveFormsModule,
        RouterTestingModule,
        AppRoutingModule
      ],
      declarations: [
        NavigationComponent,
        ContainersComponent,
        FormsComponent,
        ChartsComponent,
        InfoComponent,
        CardsComponent
      ],
      providers: [],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
