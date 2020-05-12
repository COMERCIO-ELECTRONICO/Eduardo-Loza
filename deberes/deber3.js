/*
 DEBER
 Nombre: Eduardo Loza
usar un arreglo de json (nombre, edad, fechaNacimiento, Telf)
- callback crear UN USUARIO (JSON) -> buscar en si ya existe debe impirmir q ya existe y sino crearlo
- callback editar un usuario
- callback eliminar un usuario
- callback listar usuario
*/

var json = {
  arreglos: {
    persona: ["nicolas", "21", "11/01/98", "0998790522"],
  },
};

//Listar

function listarPersona(arreglo, m) {
  arreglo.forEach((usuario) => {
    console.log(usuario);
  });
  m({
    mensaje: "lista de persona",
  });
}

listarPersona(json.arreglos.persona, (respuestaMensaje) => {
  console.log(respuestaMensaje);
});

//Añadir

function anadirPersona(arreglo,nombre,edad,fecha,telefono,m){
    arreglo.push(nombre)  
    arreglo.push(edad)  
    arreglo.push(fecha)  
    arreglo.push(telefono)  
   
    m(
        {
        mensaje: 'Persona Agregada',
        arreglo
    }
    )
}

var indice = json.arreglos.persona.indexOf("nicolas");
if(indice !== -1){
  console.log("Esta persona ya se encuentra agregada");
}else{
  anadirPersona(json.arreglos.persona, 'eduardo','22','20/05/97','0997856772',(mensaje) =>{
    console.log(mensaje);
    
})
}

//Editar

function editarPersona(arreglo,nombre,edad,fecha,telefono,indice,indice2,indice3,indice4,m) {

  arreglo[indice] = nombre
  
  arreglo[indice2] = edad
  
  arreglo[indice3] = fecha

  arreglo[indice4] = telefono
  
  m({
    mensaje: "Persona editada",
    arreglo,
  });
}

editarPersona(json.arreglos.persona, "carlos",'25','20/05/97','0997856772',0,1,2,3,(respuestaMensaje) => {
  console.log(respuestaMensaje);
});


//Eliminar

function eliminarPersona(arreglo,nombre,edad,fecha,telefono,indice,indice2,indice3,indice4,m) {

  arreglo[indice] = nombre
  
  arreglo[indice2] = edad
  
  arreglo[indice3] = fecha

  arreglo[indice4] = telefono
  m({
    mensaje: "Persona eliminada",
    arreglo,
  });
}

eliminarPersona(json.arreglos.persona, "",'','','',0,1,2,3,(respuestaMensaje) => {
  console.log(respuestaMensaje);
});