import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
})
export class HijoComponent implements OnInit {
  @Input() valorDelPadre: any;
  @Input() valorDelPadre2: any;
  @Input() datos;
  @Output() saludoHijo = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  calculo() {
    return 2020 - this.valorDelPadre;
  }

  //   alertaValorPadre() {
  //     alert(this.valorDelPadre);
  //   }
  SALUDAR() {
    alert('La edad es: ' + this.calculo());
    this.saludoHijo.emit('saludo de tu hijo');
  }
}
