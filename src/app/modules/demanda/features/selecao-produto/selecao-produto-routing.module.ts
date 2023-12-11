import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelecaoProdutoComponent } from './selecao-produto.component';

const routes: Routes = [
  {
    path: '',
    component: SelecaoProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelecaoProdutoRoutingModule { }
