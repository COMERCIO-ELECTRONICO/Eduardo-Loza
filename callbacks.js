//api, restbapi , comunicacion varios programas en formato json
/*Prpgramacion funcional 


function programacionFuncional(numero1, ()=>{ }, 1){

}*/

//callbacks llamada vuelta devuelve otra funcion

/*function primeraFuncion(){
    setTimeout(
        ()=>{
        console.log('primera');
    },500
   
    )
}

function segundaFuncion(){
    console.log('2');
    
}
*/
//primeraFuncion()

//segundaFuncion()



/*function saluda(nombre, callback){
    console.log('saludo a ' , nombre);
    callback()
}

function funcionCallback(){
console.log('ya salude');

}

saluda('Nicolas', funcionCallback)*/

/*segunda opcion callback

saluda('Nicolas', ()=>{
    console.log('saludaste');
    
})


//otra forma callback

function saludar(nombre){
    console.log(`ejecuto saludo a ${nombre}`);
    return nombre
    
}

function peticionUsuario(nombre, callback){
    callback(nombre)

}

peticionUsuario('nicolas', saludar)

peticionUsuario('nicolas', (saludar) =>{
console.log(saludar);

})*/



/*var arreglo = ['juan','juan','juan']

var nombreNuevo = 'juan'

function anadirNombre(arreglo, nombre, indice, cb){
    //arreglo.push(nombre);
    arreglo[indice] = nombre
    cb(
        {
        mensaje: 'exito',
        arreglo
    }
    )
}


anadirNombre(arreglo, 'nicolas', 1,(mensaje) =>{
    console.log(mensaje);
    
})*/
// DEBER
/*
usar un arreglo de json (nombre, edad, fechaNacimiento, Telf)
- callback crear UN USUARIO (JSON) -> buscar en si ya existe debe impirmir q ya existe y sino crearlo
- callback editar un usuario
- callback eliminar un usuario
- callback listar usuario
*/
//listar
/*var arregloUsuario = [1,2,3,4,5]

function listarUsuario(arreglo, cb){

    arreglo.forEach(usuario => {
        console.log(usuario);
        
        
    });
    cb({
        mensaje: 'lista de usuarios'
    })
}

listarUsuario(arregloUsuario, (respuestaMensaje)=>{
    console.log(respuestaMensaje);
    
})*/


//null var numero = 0
//undefined variable indefinida
//=== si es el mismo contenido y el mimo tipo de dato '1' === '1'
//== compara contenido no importa el tipo de dato 1 == '1'


//programacion asincrona se ejecuta no secuencialmente callback es asincrona


//npm que es
//instalacion
//npm install nombrepaquete
//npm install nombrepaquete@1.23
//npm install nombrepaquete@latest
//npm init iniciar package.json
//npm i
//node modules
//git ignore

