import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
  ],
  exports: [
    ListComponent
  ]
})
export class ListModule { }
