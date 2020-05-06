var json={
    nombre: 'eduardo',
    edad: 21,
    soltero: true,
    fecha: new Date('1998/01/11'),
}
//console.log(json.edad)
//console.log(json['nombre'])
//error
//info
//warn
json.nombre = 'nicolas'
json.direccion = 'Tumbaco'

console.log(json)

delete json.direccion
console.log(json)
