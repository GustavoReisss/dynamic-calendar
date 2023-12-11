import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDemandaComponent } from './material-demanda.component';

const routes: Routes = [
  {
    path: '',
    component: MaterialDemandaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialDemandaRoutingModule { }
