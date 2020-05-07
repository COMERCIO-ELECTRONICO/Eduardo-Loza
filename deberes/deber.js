/*Nombre: Eduardo Loza
arreglo uno, multiplique * 2, y me filtrar los pares, usar map y filter
arreglo dos, filter los los impares , sumar + 2
*/
var json = {

    arreglos: {
      uno: [2,4,5,8,6,9,10],
      dos: [
        {valor: 1},
        {valor: 4},
        {valor: 2},
        {valor: 24},
        {valor: 100},
        {valor: 23},
        {valor: 45},
        {valor: 23}
      ]
    }
  }


//Array 1
var multiplicacion = json.arreglos.uno.map(
    (item)=>{
        return item*2;
    }
)

console.log('Multiplicado por 2');

console.log(multiplicacion);

var filtrarpares = multiplicacion.filter(
    (item)=>{
        return item %2==0;
    }
)
console.log('Numeros pares del array');

console.log(filtrarpares)
//Array2
var filtrarimpares = json.arreglos.dos.filter(
    (item)=>{
        return item.valor === 1 || item.valor === 23 || item.valor === 45;
        
    }
).map(
    (item)=>{
        return item.valor+2;
    }
)
console.log('Numeros impares sumados 2');
console.log(filtrarimpares);




