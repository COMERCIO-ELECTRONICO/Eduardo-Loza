var nombre = 'nicolas'

console.log(nombre.length);

//indexof muestra las posiciones
console.log(nombre.indexOf('i'));
//search muestra posicion
console.log(nombre.search('i'));
//slice divide palabra
console.log(nombre.slice(1,3));
//substring divide palabra pero toma en cuenta todo
console.log(nombre.substr(1,3));

//tolowercase mayuscula
console.log(nombre.toLowerCase());

//touppercase minuscula
console.log(nombre.toUpperCase());


var texto = 'hola mundo'
//replace remplazar
console.log(texto.replace('hola','hellow'));

//concat

console.log(texto.concat(', ',nombre));

console.log(`${texto} mas mi nombre: ${nombre}`);

//

//trim quita espacios extremos
console.log(texto.trim());

//split dividir

console.log(texto.split(''));


//charAT retorna letra de la posicion 

console.log(texto.charAt(1));

//deber palabra='COMERCIO ELECTRONICO',
//invertir palabra

//cambiar primera palabra en mayuscula , la mitad en mayuscula , la ultima a mayuscula
//calcular mitad
//sumar todos los puntos y comas