import { UsuarioModule } from './usuario/usuario.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutes } from '../app/app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { LoginComponent } from './login/login.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IniciarSesionComponent,
    LoginComponent,
    NoEncontradoComponent,
    PerfilUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    AppRoutes,
    FormsModule,
    MatInputModule,
    AutoCompleteModule,
    UsuarioModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
