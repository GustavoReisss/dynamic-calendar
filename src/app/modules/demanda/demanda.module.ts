import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandaComponent } from './demanda.component';
import { DemandaRoutingModule } from './demanda-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DemandaRoutingModule
  ],
  declarations: [DemandaComponent]
})
export class DemandaModule { }
