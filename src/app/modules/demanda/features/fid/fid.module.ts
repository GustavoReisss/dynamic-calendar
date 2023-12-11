import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FidRoutingModule } from './fid-routing.module';
import { FidComponent } from './fid.component';


@NgModule({
  declarations: [
    FidComponent
  ],
  imports: [
    CommonModule,
    FidRoutingModule
  ]
})
export class FidModule { }
