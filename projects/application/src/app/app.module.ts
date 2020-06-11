import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsComponent } from './examples/charts/charts.component';
import { ContainersComponent } from './examples/containers/containers.component';
import { InfoComponent } from './examples/info/info.component';
import { FormsComponent } from './examples/forms/forms.component';
import { CardsComponent } from './examples/cards/cards.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationBarComponent } from '../../../wonka-ui/src/lib/navigation/navigation-bar/navigation-bar.component';
import { FormComponent } from '../../../wonka-ui/src/lib/forms/form.component';
import { ChartComponent } from '../../../wonka-ui/src/lib/charts/chart.component';
import { TableComponent } from '../../../wonka-ui/src/lib/containers/tables/table.component';
import { ListComponent } from '../../../wonka-ui/src/lib/containers/lists/list.component';
import { KeyValueUnitListComponent } from '../../../wonka-ui/src/lib/containers/key-value-unit-lists/key-value-unit-list.component';
import { InfoPanelComponent } from '../../../wonka-ui/src/lib/info/info-panel.component';
import { CardComponent } from '../../../wonka-ui/src/lib/card/card.component';
import { NavigationComponent } from './examples/navigation/navigation.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    ContainersComponent,
    InfoComponent,
    FormsComponent,
    NavigationComponent,
    InfoPanelComponent,
    TableComponent,
    NavigationBarComponent,
    FormComponent,
    ListComponent,
    KeyValueUnitListComponent,
    ChartComponent,
    CardComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
