import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay, of } from 'rxjs';

export type Demanda = {
  id: number,
  status: string
}
@Injectable({
  providedIn: 'root'
})
export class DemandaService {
  id = 1
  demandas: Demanda[] = [
    {
      id: 1,
      status: 'Seleção de Produtos'
    },
    {
      id: 2,
      status: 'FID'
    },
    {
      id: 3,
      status: 'Preparando Material'
    },
    {
      id: 4,
      status: 'Material em Validação'
    }
  ]

  constructor(
    private route: ActivatedRoute
  ) {}

  setDemanda(id: number | string) {
    this.id = +id
  }

  getDemanda() {
    console.log("DemandaService", this.route)
    return of(this.demandas.find(demanda => demanda.id == this.id)).pipe(delay(1000))
  }

}
