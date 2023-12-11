import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandaComponent } from './demanda.component';
import { redirectToStatusGuard, statusDemandaGuard } from './guards/demanda.guard';

const routes: Routes = [
  {
    path: 'lista-demandas',
    loadChildren: () => import("./features/lista-demandas/lista-demandas.module").then(m => m.ListaDemandasModule)
  },
  {
    path: ':id',
    canActivateChild: [statusDemandaGuard],
    component: DemandaComponent,
    children: [
      {
        path: 'selecao-produtos',
        loadChildren: () => import('./features/selecao-produto/selecao-produto.module').then(m => m.SelecaoProdutoModule)
      },
      {
        path: 'fid',
        loadChildren: () => import('./features/fid/fid.module').then(m => m.FidModule)
      },
      {
        path: 'material-demanda',
        loadChildren: () => import('./features/material-demanda/material-demanda.module').then(m => m.MaterialDemandaModule)
      },
      {
        path: '',
        children: [],
        canActivate: [redirectToStatusGuard]
      }
    ]
  },
  {
    path: '',
    redirectTo: 'lista-demandas',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandaRoutingModule { }
