import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDemandasComponent } from './lista-demandas.component';

const routes: Routes = [
  {
    path: '',
    component: ListaDemandasComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaDemandasRoutingModule { }
