const obtenerInfoSistema = require("./export.js");
const infoSistema = obtenerInfoSistema();

console.log("@@@ ------ INFORMACIÓN DEL SISTEMA ------ @@@");
console.log("Sistema operativo:", infoSistema.nombre);
console.log("Versión:", infoSistema.version);
console.log("Arquitectura:", infoSistema.arquitectura);
console.log(
  "Memoria libre (GB):",
  Math.ceil((infoSistema.memoriaLibre / 1024 ** 3) * 100) / 100,
);
console.log(
  "CPUs:",
  infoSistema.cpus.map((element) => element.model),
);
