import { RouterModule, Routes } from '@angular/router';

import { BedsComponent } from './containers/beds/beds.component';
import { HarvestComponent } from './containers/harvest/harvest.component';
import { HomeComponent } from './containers/home/home.component';
import { NgModule } from '@angular/core';
import { PlantComponent } from './containers/plant/plant.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'beds',
    component: BedsComponent
  },
  {
    path: 'plant',
    component: PlantComponent
  },
  {
    path: 'harvest',
    component: HarvestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
