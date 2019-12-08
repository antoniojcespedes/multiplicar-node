//const fs = require('express'); paquetes no nativos de node
//const fs = require('./archivo'); archivos que no sotros creamos
const argv = require('./config/yargs').argv;
var colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let commando = argv._[0];
let base = argv.base;
let limite = argv.limite;

console.log(base);
console.log(limite);

switch (commando) {
    case 'listar':
        listarTabla(base, limite);
        break;

    case 'crear':
        crearArchivo(base, limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo.green }`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}

//onsole.log(process.argv);

let argv2 = process.argv;




// let parametro = argv[2];
// let base = parametro.split('=')[1];