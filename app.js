const argv = require('yargs');
const { crearTabla } = require("./multiplicar/multiplicar");



let argv2 = process.argv;

let param = argv[2];

let base = param.split('=')[1];

console.log(argv);
console.log(argv2);

crearTabla(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(error => console.log(error));