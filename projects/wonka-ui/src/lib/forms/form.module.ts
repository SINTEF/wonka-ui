import { NgModule } from '@angular/core';
import { FormComponent } from './form.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MatIconModule
  ],
  exports: [
    FormComponent
  ]
})
export class FormModule { }
