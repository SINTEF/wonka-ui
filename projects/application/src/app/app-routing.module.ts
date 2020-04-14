import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './examples/forms/forms.component';
import { ChartsComponent } from './examples/charts/charts.component';
import { ContainersComponent } from './examples/containers/containers.component';
import { InfoComponent } from './examples/info/info.component';
import { NavigationComponent } from './examples/navigation/navigation.component';


const routes: Routes = [
  {path: '' , component: InfoComponent},
  {path: 'info-example' , component: InfoComponent},
  {path: 'forms-example' , component: FormsComponent},
  {path: 'charts-example' , component: ChartsComponent},
  {path: 'containers-example' , component: ContainersComponent},
  {path: 'info-example' , component: InfoComponent},
  {path: 'navigation-example' , component: NavigationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
