function saludar(){
    return 'hola'
}

saludar()
console.log(saludar())

//funciones anonimas porque no lleva un nombre 

var funcionAnonima = function(){
return 'funcion anonima'
}
console.log(funcionAnonima())
//funcion arrow fat 

var funcionFlechaGorda = (a, b) =>{
return a + b;
}

console.log(funcionFlechaGorda('a',{a:1}));

var json = {
    suma: (a, b) => {
        return a + b;

    }
}

console.log(json.suma(1,2));
