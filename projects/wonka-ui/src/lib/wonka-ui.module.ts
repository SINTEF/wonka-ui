import { NgModule } from '@angular/core';
import { ChartModule } from './charts/chart.module';
import { ListModule } from './containers/lists/list.module';
import { InfoPanelModule } from './info/info-panel.module';
import { TableModule } from './containers/tables/table.module';
import { FormModule } from './forms/form.module';
import { KeyValueUnitListModule } from './containers/key-value-unit-lists/key-value-unit-list.module';
import { NavigationBarModule } from './navigation/navigation-bar/navigation-bar.module';

@NgModule({
  declarations: [],
  imports: [],
  providers: [],
  exports: [
    NavigationBarModule,
    ChartModule,
    ListModule,
    InfoPanelModule,
    TableModule,
    FormModule,
    KeyValueUnitListModule,
  ]
})
export class WonkaUIModule { }

