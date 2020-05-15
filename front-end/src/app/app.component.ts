import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';

  tituloPadre = 'Soy tu Padre';
  nombreBotonPadre = 'alertar!!!!!';
  imagenPadre = 'https://images7.memedroid.com/images/UPLOADED128/56fac5463ee89.jpeg';

  datosHijo = {
  tituloPadre : 'Soy tu Padre',
  nombreBotonPadre : 'alertar!!!!!',
  imagenPadre : 'https://www.infobae.com/new-resizer/DtIBqxEtjk2M2ZWFKDHjIE1AFVI=/420x236/filters:format(jpg):quality(70)//cloudfront-us-east-1.images.arcpublishing.com/infobae/7LUV2IRYXNB4HDNGKAP2GNNZRQ.jpg'
  };

  obtenerRespuestaHijo(evento){
    console.log(evento)
  }
}

