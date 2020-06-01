import { LoginGuard } from './guards/login.guard';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { LoginComponent } from './login/login.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const rutas: Routes = [
  {
    path: 'inicio',
    component: HomeComponent,
  },
  {
    path: 'iniciar-sesion',
    component: IniciarSesionComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
     canActivate: [LoginGuard]
  },
  {
    path: 'estudiante/perfil',
    component: PerfilUsuarioComponent,
  },
  {
    path: 'usuario',
    loadChildren: () =>
      import('./usuario/usuario.module').then((mod) => mod.UsuarioModule),
  },
  {
    path: 'profesor/perfil',
    component: PerfilUsuarioComponent,
  },
  {
    path: '',
    redirectTo: 'inicio',
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
  exports: [RouterModule],
})
export class AppRoutes {}
