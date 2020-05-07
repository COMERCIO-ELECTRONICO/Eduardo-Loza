var json = {
  nombre: "eduardo",
  edad: 21,
  soltero: true,
  fecha: new Date("1998/01/11"),
};
//console.log(json.edad)
//console.log(json['nombre'])
//error
//info
//warn
json.nombre = "nicolas";
json.direccion = "Tumbaco";

console.log(json);

delete json.direccion;
console.log(json);

var json2 = {
  nombre: "eduardo",
  edad: 21,
  soltero: true,
  fecha: new Date("1998/01/11"),
  interese: {
    hobbies: ["futbol", "ps4"],
    peliculas: [
      {
        nombre: "",
        tipo: "",
        esBuena: true,
      },
      {
        nombre: "",
        tipo: "",
        esBuena: true,
      },
    ],
  },
  familia: [
    {
      padre: "",
      edad: 1,
    },
    {
      madre: "",
      edad: 1,
    }
  ]
}

// stringify

var json2String = JSON.stringify(json2)
console.log(json2)
console.log(json2String)

// Parse

var jsonParse = JSON.parse(json2String)
console.log(jsonParse)



