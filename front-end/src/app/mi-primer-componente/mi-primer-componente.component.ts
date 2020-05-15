import { Component, OnInit, Input, Output, EventEmitter , OnDestroy} from '@angular/core';

//@nombreDecorador()decorador es una funcion extre que hace operaciones
@Component({
  selector: 'app-mi-primer-componente',
  templateUrl: './mi-primer-componente.component.html',
  styleUrls: ['./mi-primer-componente.component.css'],
})
export class MiPrimerComponenteComponent implements OnInit, OnDestroy {
  @Input() titulo: string;
  @Input() nombreBoton: string;
  @Input() imagenPath: string;
  @Input() datos;

  @Output() saludoHijo = new EventEmitter();

  fecha = new Date();
  sueldo: number = 3.1416;
  nombre: string = 'nicolas';
  constructor() {}

  ngOnInit(): void {
    console.log('datos del padre en hijo');
    console.log(this.datos);
    
    // ngOnAfterView va a cargar una vez que todos los componenetes se hayan renderizado bien
    // ngOnDestroy el componente se va a destruir o salir
  }

  ngOnDestroy() {

  }

  SALUDAR() {
    alert('hola');
    this.saludoHijo.emit('saludo de tu hijo');
  }

}
