import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent implements OnInit {
  datosHijo = {
    nombreBoton: 'CALCULAR EDAD',
    
  };
  constructor() {}
  valorDelInput = '';
  nombreBoton = '';
  ngOnInit(): void {}

  obtenerRespuestaHijo(evento){
    console.log(evento)
  }
}


