import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'proyecto-angular';
  esconderHola = false;
  arregloNumeros = [{nombre: 'nicolas'},{nombre: 'eduardo'}];
  
  eventoClick() {
    this.esconderHola = true;
  }
}
