import { NgModule } from '@angular/core';
import { NavigationBarComponent } from './navigation-bar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavigationBarComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  providers: [],
  exports: [
    NavigationBarComponent
  ]
})
export class NavigationBarModule { }
