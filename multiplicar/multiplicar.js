const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log(`===================================`.green);
    console.log(`===== tabla de ${ base } =====`.red);
    console.log(`===================================`.green);

    for (let i = 1; i <= limite; i++) {

        console.log(`${ base } * ${ i } = ${ i * base }`)
    }
}

let crearArchivo = (base, limite = 10) => {



    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ i * base}\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`)
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}