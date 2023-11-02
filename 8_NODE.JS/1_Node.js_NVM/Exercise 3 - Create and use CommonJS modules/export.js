const os = require("node:os");
/* Exercise 3 - Create and use CommonJS modules

Create a script that uses module.exports to export a function.
Create another script that uses require() to import the function and then calls it. */

module.exports = function obtenerInfoSistema() {
  return {
    nombre: os.platform(),
    version: os.release(),
    arquitectura: os.arch(),
    cpus: os.cpus(),
    memoriaLibre: os.freemem(),
  };
};
