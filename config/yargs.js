
const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de multiplicar"
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: false,
    default: false,
    describe: "Muestra la tabala en la consola"
  })
  .option("lm", {
    alias: "limite",
    type: "number",
    demandOption: true,
    default: 12,
    describe: "Limite de la tbl"
  })
  .check((argv, options) => {
    if (isNaN(argv.base)) {
      throw "La base tiene que ser un número";
    }
    if (isNaN(argv.lm)) {
      throw "El limite debe ser un numero";
    }

    return true;
  }).argv;

module.exports = argv;
