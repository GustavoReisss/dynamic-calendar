import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialDemandaRoutingModule } from './material-demanda-routing.module';
import { MaterialDemandaComponent } from './material-demanda.component';


@NgModule({
  declarations: [
    MaterialDemandaComponent
  ],
  imports: [
    CommonModule,
    MaterialDemandaRoutingModule
  ]
})
export class MaterialDemandaModule { }
