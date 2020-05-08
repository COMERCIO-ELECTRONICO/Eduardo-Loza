const EventEmitter = require("events");

class entrarALaCasa extends EventEmitter {}

const entrarCasa = new entrarALaCasa();
var nombreEvento ='entrar por la puerta de adelante'
//evento escucha 
//on
entrarCasa.on(nombreEvento, (nombre)=>{
    console.log(`saludar ${nombre}, que ingreso por la puerta de adelante`);
    
})

//evento que emite
//emit

entrarCasa.emit(nombreEvento,'nicolas')