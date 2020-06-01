import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // credenciales

  correo = '';
  pass = '';
  seleccionadoValor;

  valorAutocomplete = '';
  arregloResultado = [];
  sugerencias = ['Estudiante', 'Profesor'];

  constructor(
    private readonly _router: Router,
    private readonly _loginService: LoginService,  

  ) {}

  ngOnInit(): void {
    // this._loginService
    //   .metodoGet('http://localhost:1337/usuario')
    //   .subscribe((resultadoMetodoGet) => {
    //     console.log('respuesta del get');
    //     console.log(resultadoMetodoGet);
    //   });
  }

  buscarSugerencia(evento) {
    console.log(evento.query);
    if (evento.query !== '') {
      const valorEncontrado = this.sugerencias.find((item) => {
        return item === evento.query;
      });
      console.log(valorEncontrado);
      this.arregloResultado.push(valorEncontrado);
      this.sugerencias = this.arregloResultado;
    } else {
      this.sugerencias = ['Estudiante', 'Profesor'];
    }
  }

  valorSeleccionado(evento) {
    console.log(evento);
    this.seleccionadoValor = evento;
  }

  ingresar() {
    console.log('guardar')
    
    localStorage
    .setItem(
      'nombre',
      JSON.stringify({nombre: 'kevin'})
    )
    

    // this._loginService
    //   .metodoPost('http://localhost:1337/usuario', {
    //     nombre: 'kevin2',
    //     correo: this.correo,
    //     edad: this.pass,
    //     esCasado: true,
    //   })
    //   .subscribe((resultadoPost) => {
    //     console.log('Respuesta Post');
    //     console.log(resultadoPost);
    //   });
    //  if (this.pass === '1234') {
    //   alert(this.correo);
    //    if (this.seleccionadoValor === 'Estudiante') {
    //      alert('es estudiante');
    //      this._router.navigate(['/estudiante', 'perfil']);
    //    }
    //    if (this.seleccionadoValor === 'Profesor') {
    //      alert('es profesor');
    //      this._router.navigate(['/profesor', 'perfil']);
    //    }
    //  } else {
    //    alert('no ingreso');
    //  }
  }

  eliminarRegistroPorId() {
    this._loginService
      .metodoDelete('http://localhost:1337/usuario/1')
      .subscribe((respuestaDelete) => {
        console.log('Respuesta delete');
        console.log(respuestaDelete);
      });
  }
}
