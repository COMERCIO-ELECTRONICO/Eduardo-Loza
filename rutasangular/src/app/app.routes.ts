import { PokemonModule } from './pokemon/pokemon.module';
import { LoginComponent } from './login/login.component';
import { NoEncontradoComponent } from './inicio/no-encontrado/no-encontrado.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './inicio/home/home.component';
const rutas: Routes = [
  {
    path: 'inicio',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
{
path: 'usuario',
loadChildren: ()=> import('./usuario/usuario.module').then(m=>m.UsuarioModule)

},
{
path: 'pokemon',
loadChildren: ()=> import('../app/pokemon/pokemon.module').then(m=>m.PokemonModule)

},
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NoEncontradoComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  providers: [],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutesComponent {}
