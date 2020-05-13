// interfaz Ayudan a tener un mejor tipada tabien se las conocen como firmas

interface persona {
  nombre: string;
  apellido: string;
  edad: number;
  esSoltero: boolean;
}

interface correo {
  email?: string;
}

interface trabajo extends correo, persona {
  nombreTrabajo: string;
}

const policia: trabajo = {
  email: "a",
  apellido: "",
  edad: 1,
  esSoltero: false,
  nombre: "",
  nombreTrabajo: "",
};


//casteo variable sirve para decirle que tipo de dato es una variable

const valor = 1;
//as 
valor as number;
//
//<tipoDato>Variable
//tipo interfaz
//valor as trabajo;
<number>valor