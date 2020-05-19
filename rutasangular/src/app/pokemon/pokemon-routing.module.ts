import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from "./listar/listar.component";

const routes: Routes = [
  {
    path: 'listar',
    component: ListarComponent
  },
  {
    path: 'editar',
    component: EditarComponent
  },
  {
    path: 'crear',
    component: CrearComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
