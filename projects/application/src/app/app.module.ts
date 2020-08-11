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
import { NavigationComponent } from './examples/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import {
  CardModule,
  FormModule,
  NavigationBarModule,
  ChartModule,
  TableModule,
  ListModule,
  KeyValueUnitListModule,
  InfoPanelModule
} from '@sintef/wonka-ui';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    ContainersComponent,
    InfoComponent,
    FormsComponent,
    NavigationComponent,
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
    NoopAnimationsModule,
    CardModule,
    FormModule,
    NavigationBarModule,
    ChartModule,
    TableModule,
    ListModule,
    KeyValueUnitListModule,
    InfoPanelModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
