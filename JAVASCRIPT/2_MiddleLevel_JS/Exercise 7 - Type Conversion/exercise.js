let hello = 'Ciao';     // number
let age = 18;       // boolean
let isGraduated = false;     // string

hello = Number(false);
console.log(hello, typeof(hello)); // Nos devuelve NaN (Not a Number) porque al intentar convertir la cadena de texto en un number, no se consigue interpretar el lenguaje correctamente. Se podría convertir a booleano en cambio, porque es un lenguaje binario (true o false, que corresponde a 1 o 0) y puede interpretarse numéricamente en estos dos números, dado que las computadoras están diseñadas en este lenguaje binario a su vez.

age = Boolean(18);
console.log(age, typeof(age));

isGraduated = String(false);
console.log(isGraduated, typeof(isGraduated));
