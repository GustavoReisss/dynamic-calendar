import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelecaoProdutoRoutingModule } from './selecao-produto-routing.module';
import { SelecaoProdutoComponent } from './selecao-produto.component';


@NgModule({
  declarations: [
    SelecaoProdutoComponent
  ],
  imports: [
    CommonModule,
    SelecaoProdutoRoutingModule
  ]
})
export class SelecaoProdutoModule { }
