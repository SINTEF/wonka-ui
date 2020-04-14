import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsComponent } from './forms.component';
import { InfoComponent } from '../info/info.component';
import { ContainersComponent } from '../containers/containers.component';
import { ChartsComponent } from '../charts/charts.component';
import { InfoPanelComponent } from '../../../../../wonka-ui/src/lib/info/info-panel.component';
import { MatIcon } from '@angular/material/icon';
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

describe('FormsComponent', () => {
  let component: FormsComponent;
  let fixture: ComponentFixture<FormsComponent>;

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
        MatIcon,
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
    fixture = TestBed.createComponent(FormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
