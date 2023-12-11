import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'calendario',
        loadChildren: () => import('./modules/calendario/calendario.module').then(m => m.CalendarioModule)
      },
      {
        path: 'demanda',
        loadChildren: () => import('./modules/demanda/demanda.module').then(m => m.DemandaModule)
      },
      {
        path: '',
        redirectTo: 'calendario',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
