import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ChartComponent
  ],
  imports: [
    CommonModule,
    ChartsModule
  ],
  providers: [
    ChartsModule
  ],
  exports: [
    ChartComponent
  ]
})
export class ChartModule { }
