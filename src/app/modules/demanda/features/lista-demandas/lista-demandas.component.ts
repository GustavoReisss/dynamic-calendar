import { Component, OnInit } from '@angular/core';
import { Demanda, DemandaService } from '../../services/demanda.service';

@Component({
  selector: 'app-lista-demandas',
  templateUrl: './lista-demandas.component.html',
  styleUrls: ['./lista-demandas.component.scss']
})
export class ListaDemandasComponent implements OnInit {

  demandas: Demanda[] = []

  constructor(
    private demandaService: DemandaService
  ) { }

  ngOnInit() {
    this.demandas = this.demandaService.demandas
  }

}
