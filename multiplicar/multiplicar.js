const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            return reject('El limite y la base deben de ser numero');
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += (base * i) + '\n';
            //console.log(data);

        }
        resolve(colors.green(data));
    });

}


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            return reject('No es un numero');
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (base * i) + '\n';
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {

                resolve(colors.blue(`tabla-${base}.txt`));
            }

        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}