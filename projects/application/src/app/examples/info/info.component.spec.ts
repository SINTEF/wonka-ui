import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoComponent } from './info.component';
import { InfoPanelComponent } from '../../../../../wonka-ui/src/lib/info/info-panel.component';
import { ContainersComponent } from '../containers/containers.component';
import { FormsComponent } from '../forms/forms.component';
import { ChartsComponent } from '../charts/charts.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TableComponent } from '../../../../../wonka-ui/src/lib/containers/tables/table.component';
import { FormComponent } from '../../../../../wonka-ui/src/lib/forms/form.component';
import { ListComponent } from '../../../../../wonka-ui/src/lib/containers/lists/list.component';
import { MockComponent } from 'ng-mocks';
import { ChartComponent } from '../../../../../wonka-ui/src/lib/charts/chart.component';
import { KeyValueUnitListComponent } from '../../../../../wonka-ui/src/lib/containers/key-value-unit-lists/key-value-unit-list.component';
import { NavigationComponent } from 'src/app/examples/navigation/navigation.component';
import { CardsComponent } from '../cards/cards.component';
import { CardComponent } from '../../../../../wonka-ui/src/lib/card/card.component';

describe('InfoComponent', () => {
  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;

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
        MockComponent(ChartComponent)
      ],
      providers: [],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
