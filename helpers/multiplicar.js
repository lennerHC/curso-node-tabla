const { rejects } = require("assert");
const fs = require("fs");
const colors = require('colors');

const crearArchivo = (base = 5, listar, limite ) => {
  return new Promise((resolve, reject) => {
  
    let salida = "";
    for (let i = 1; i <= limite; i++) {
      salida += `(${base} x  ${i} = ${base * i})\n`;
    }
      if( listar ){
        console.log("===========================".rainbow);
        console.log(`       TABLA DEL: ${base}`.blue);
        console.log("===========================".rainbow);
        console.log(salida.yellow)
      }

      try {
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        resolve(`tabla-${base}.txt fue creado`);
      } catch (err) {
        reject(err);
      }
    
  });
};

module.exports = {
  crearArchivo
};



// const crearArchivo = (base = 5, listar = false) => {
//     return new Promise((resolve, reject) => {
        
//         let salida = '';
//         for (let i = 1; i <= 10; i++) {
//             salida += `${base} x ${i} = ${base * i}\n`;
//         }
//         if (listar) {
//             console.log('======================');
//             console.log('Tabla del', base)
//             console.log('======================');

//             console.log(salida); 
//         }
//         try {
//             fs.writeFileSync(`tabla-${base}.txt`, salida);
//             resolve(`tabla-${base}.txt`.rainbow);
//         } catch (error) {
//             reject(err);
//         }
//         (salida)
//             ? resolve()
//             : reject ('Error')
//     })
// }

// //exportar
// module.exports = {
//     crearArchivo
// }
