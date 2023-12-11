import { ActivatedRoute, CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { DemandaService } from '../services/demanda.service';
import { first, map, tap } from 'rxjs/operators'
import { rotasFid, rotasMaterialDemanda, rotasSelecaoProdutos } from './rotas-permitidas';

// Cenários:

// 1 - rota demanda/:id sem a rota filho
//  AÇÃO: Redirecionar a demanda para a rota referente ao status atual a demanda

// 2 - rota demanda/:id com a rota filho
//  AÇÃO: verificar se a demanda está em um status em que é possível acessar a rota desejada
//  EX: tentando acessar a rota de uma etapa que já foi concluída


const rotas = new Map([
  ["Seleção de Produtos", {"route": "selecao-produtos", "rotasPermitidas": rotasSelecaoProdutos}],
  ["FID", {"route": "fid", "rotasPermitidas": rotasFid}],
  ["Preparando Material", {"route": "material-demanda", "rotasPermitidas": rotasMaterialDemanda}],
  ["Material em Validação", {"route": "material-demanda", "rotasPermitidas": rotasMaterialDemanda}],
])

export const redirectToStatusGuard: CanActivateFn = (route, state) => {
  console.log("redirectToStatusGuard")
  const router: Router = inject(Router)
  // const activatedRoute: ActivatedRoute = inject(ActivatedRoute)
  const demandaService: DemandaService = inject(DemandaService)
  const { id } = route.params

  // router.navigate(['1'], {relativeTo: activatedRoute})

  return demandaService.getDemanda()
    .pipe(
      first(),
      tap(demanda => {
        const statusDemanda = demanda?.status
        console.log(id, statusDemanda)
        if (!statusDemanda || typeof(statusDemanda) !== 'string' || !rotas.has(statusDemanda)) return

        let rotaDemanda: any = rotas.get(statusDemanda)!.route
        console.log("rotaDemanda", id, rotaDemanda)
        router.navigate([`/demanda/${id}/${rotaDemanda}`])
      }),
      map(_ => false)
    )
}

export const statusDemandaGuard: CanActivateChildFn = (route, state) => {
  // Cenário 2
  console.log("statusDemandaGuard")
  // console.log(route)
  // console.log(state)

  const router: Router = inject(Router)
  const demandaService: DemandaService = inject(DemandaService)
  const path = route.routeConfig?.path
  
  if (!path) {
    console.log("Rota sem path, permitindo!")
    // rota demanda/:id sem a rota filho ==> permitir, pois o guard
    // "redirectToStatusGuard" irá redirecionar a demanda para a rota correta
    return true
  }

  let { params } = route 
  
  if (!('id' in params) && route.parent) {
    params = route.parent.params
  }

  const { id } = params

  if (!id) {
    console.error("Não foi possível encontrar o id da demanda!")
    return false
  }

  demandaService.setDemanda(id)

  return demandaService.getDemanda()
    .pipe(
      map(demanda => {
        console.log("Rota com path, validando status!")
        const statusDemanda = demanda?.status

        if (!statusDemanda  || typeof(statusDemanda) !== 'string' || !rotas.has(statusDemanda)) return false
        console.log(rotas.get(statusDemanda), !rotas.get(statusDemanda)!.rotasPermitidas.includes(path))
        if (!rotas.get(statusDemanda)!.rotasPermitidas.includes(path)) {
          console.log(`demanda ${id} de status: ${statusDemanda} NÃO tem acesso a etapa:`, path)
          let rotaDemanda = rotas.get(statusDemanda)!.route
          router.navigate([`/demanda/${id}/${rotaDemanda}`])
          return false
        }

        console.log(`demanda ${id} de status: ${statusDemanda} POSSUI acesso a etapa:`, path)

        
        return true
      })
    )
};
