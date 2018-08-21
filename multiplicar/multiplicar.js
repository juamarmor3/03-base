const fs = require('fs');


let crearTabla = (base) => {



    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base)) {
            reject("No es un numero");
            return;
        }
        for (let index = 1; index <= 10; index++) {
            data += (`${base} x ${index} = ${ base * index}\n`);
        }

        fs.writeFile(`tablas/tabla_${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla_${base}.txt`);
        });
    });
}

module.exports = {
    crearTabla
}