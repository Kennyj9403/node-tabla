// imprimir tabla de multiplicación

const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs')
require('colors');

console.clear();

crearArchivo( argv.b, argv.l, argv.h )
.then( nombreArchvo => console.log(nombreArchvo.rainbow, 'creado') )
.catch( err => console.log(err) );
