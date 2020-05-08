/*var arregloNumero = [1,2,3,4];
//indexOf encuentra el indice del elemnto
//console.log(arregloNumero.indexOf(3))
//a;adir elementos, push
//console.log(arregloNumero.push(10))
//console.log(arregloNumero)
//acceder elementos
//console.log(arregloNumero[2])

//slice y splice


//slice => divide el vector original maneja postivos y negativos

var arregloSlice = arregloNumero.slice(0,2)
console.log(arregloSlice)

console.log(arregloNumero)
//splice => elimina elemntos de un arreglo divide el vector original

var arregloSplice = arregloNumero.splice(0,2)
console.log(arregloSplice);
console.log(arregloNumero)


//pop => elimina ultimo elemento

console.log(arregloNumero.pop());
console.log(arregloNumero)
//recorrear arreglo for each
var arreglo2 = [1,2,3,4];
/*arreglo2.forEach(
    function(item,indice, arreglo){
        console.log('item: ' + item);
        console.log('indice: ' + indice);
        console.log('arreglo: ' + arreglo);
    }
)

//map => retorna arreglo ,  muta al arreglo o lo modifica*/ //toca retornar

/*var arregloMutado = arreglo2.map(
    (item,valor,arreglo)=>{
        console.log(item);
        if(item === 2 ){
return item+2;
        }
        return item+1
    }

)

console.log(arregloMutado);


// funcion filter => retorna arreglo dependiento de la condicion 

var arreglofilter = arreglo2.filter(
    (item,valor,arreglo)=>{
        return item < 3
    }
)

console.log(arreglofilter);


//find retorna un valor no un arreglo 
var valorfind= arreglo2.find(
   (item , indice, arreglo)=>{
       return item ===1
   } 
)
console.log(valorfind);


//every y some verifica si el arreglo cumple con una condicion

//every verifica si todos los valores cumplen con la condicion retorna true

//some verifica qe almenos 1 cumpla la condicion 

var operadoresmapyfilter = arreglo2.map(
    (item)=>{
        return item*2;
    }
).filter(

    (item)=>{
        return item === 4;
    }

)

console.log(operadoresmapyfilter);
*/
///////////////////////////////////////


//reduce para calcular
var arregloReduce = [2,1,11,2,45]
var valorSumaArreglo = arregloReduce.reduce(
    (acumulador , item, indice, arreglo)=>{
        return acumulador + item
    }, 1
)
console.log(valorSumaArreglo);
