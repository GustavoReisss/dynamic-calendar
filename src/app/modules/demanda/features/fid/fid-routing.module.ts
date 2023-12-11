import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FidComponent } from './fid.component';

const routes: Routes = [
  {
    path: '',
    component: FidComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FidRoutingModule { }
