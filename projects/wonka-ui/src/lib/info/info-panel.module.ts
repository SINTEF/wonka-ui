import { NgModule } from '@angular/core';
import { InfoPanelComponent } from './info-panel.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    InfoPanelComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    InfoPanelComponent
  ]
})
export class InfoPanelModule { }
