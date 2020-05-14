import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';

  tituloPadre = 'soy tu padre hola';
  nombreBotonPadre = 'alertar!!!!!!!!';
  imagenPadre = 'https://www.infobae.com/new-resizer/DtIBqxEtjk2M2ZWFKDHjIE1AFVI=/420x236/filters:format(jpg):quality(70)//cloudfront-us-east-1.images.arcpublishing.com/infobae/7LUV2IRYXNB4HDNGKAP2GNNZRQ.jpg';

  // datosHijo = {
  //   tituloPadre: 'soy tu padre hola',
  //   nombreBotonPadre: 'alertar!!!!!!!!',
  //   imagenPadre: 'https://as.com/futbol/imagenes/2020/01/27/album/1580109965_448579_1580110002_album_grande.jpg',
  // };


  obtenerRespuestaHjo(evento) {
    console.log(evento)
  }
}

