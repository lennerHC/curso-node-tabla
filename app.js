//tabla de multiplicar del 5

const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('./config/yargs')

console.clear;

// console.log(process.argv);
// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');
// console.log(base);

// console.log(process.argv);
console.log(argv);



//const base = 5;


crearArchivo(argv.base, argv.l, argv.lm)
    .then((nombreArchivo) => console.log(nombreArchivo))
    .catch((err) => console.log(err));



