/*
Nombre: Eduardo Loza
1. - DEBER : Inveritr la  PALABRA='COMERCIO ELECTRONICO'*/
var palabra = "COMERCIO ELECTRONICO";
console.log(palabra);
console.log("Palabra invertida: " + palabra.split("").reverse().join(""));

/*2. - DEBER:
UTILICEN FUNCIONES
- primera palabra en mayuscula
- la palabra de la mitad en mayuscula
- ultima palabra  en mayuscula
- sumar todos los puntos
- sumar todos las comas*/
var texto =
  "Realiza fotografías de 20 megapíxeles y puede utilizar un perfil de color Dlog-M de 10 bits, con el que se obtiene un rango dinámico más amplio al registrar hasta mil millones de colores. Esto queda bastante por encima de los 16 millones de colores de los perfiles de 8 bits, pudiendo dejar más margen y libertad en la edición posterior del material. Por su parte, el Mavic 2 Zoom cuenta con un sensor CMOS de 1/2,3 pulgadas y zoom óptico, lo cual da nombre al propio producto. En este caso es capaz de realizar capturas de 12 megapíxeles, disponiendo un zoom automático híbrido (que combina detección de fase y contraste) de una función de 'Superresolución' que recurre al zoom óptico para realizar nueve fotografías y componer una sola con todas ellas de 48 megapíxeles (con más detalle).";
var primeraPalabra = texto.split(" ")[0].toUpperCase();
console.log("Primera palabra: " + primeraPalabra);
var ultimaPalabra = texto.split(" ");
var ultima = ultimaPalabra[ultimaPalabra.length - 1].toUpperCase();
console.log("Ultima palabra: " + ultima);
var palabraMitad = texto.split(" ");
var mitad = palabraMitad[(palabraMitad.length - 1) / 2].toUpperCase();
console.log("Palabra de la mitad: " + mitad);

console.log(texto.split(',').length-1 +" comas");

console.log(texto.split('.').length-1 +" puntos");

