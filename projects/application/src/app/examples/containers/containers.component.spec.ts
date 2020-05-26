import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainersComponent } from './containers.component';
import { TableComponent } from '../../../../../wonka-ui/src/lib/containers/tables/table.component';
import { ListComponent } from '../../../../../wonka-ui/src/lib/containers/lists/list.component';
import { InfoComponent } from '../info/info.component';
import { FormsComponent } from '../forms/forms.component';
import { ChartsComponent } from '../charts/charts.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormComponent } from '../../../../../wonka-ui/src/lib/forms/form.component';
import { InfoPanelComponent } from '../../../../../wonka-ui/src/lib/info/info-panel.component';
import { MockComponent } from 'ng-mocks';
import { ChartComponent } from '../../../../../wonka-ui/src/lib/charts/chart.component';
import { KeyValueUnitListComponent } from '../../../../../wonka-ui/src/lib/containers/key-value-unit-lists/key-value-unit-list.component';
import { NavigationComponent } from 'src/app/examples/navigation/navigation.component';

describe('ContainersComponent', () => {
  let component: ContainersComponent;
  let fixture: ComponentFixture<ContainersComponent>;

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
        ChartsComponent,
        InfoPanelComponent,
        NavigationComponent,
        MockComponent(ChartComponent)
      ],
      providers: [],
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
