import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaDemandasComponent } from './lista-demandas.component';
import { ListaDemandasRoutingModule } from './lista-demandas-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ListaDemandasRoutingModule
  ],
  declarations: [ListaDemandasComponent]
})
export class ListaDemandasModule { }
