import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//@nombreDecorador()decorador es una funcion extre que hace operaciones
@Component({
  selector: 'app-mi-primer-componente',
  templateUrl: './mi-primer-componente.component.html',
  styleUrls: ['./mi-primer-componente.component.css'],
})
export class MiPrimerComponenteComponent implements OnInit {
  @Input() titulo: string;
  @Input() nombreBoton: string;
  @Input() imagenPath: string;
  // @Input() datos: Object;

  @Output() saludoHijo = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  SALUDAR() {
    alert('holaaaaaa');
    this.saludoHijo.emit('saludo de tu hijo');
  }

}
