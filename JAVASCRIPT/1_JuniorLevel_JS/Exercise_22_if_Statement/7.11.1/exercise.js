// # Exercise 22

// Rewrite the exercise 20, by using a Switch statement.

// let variablePrimitive = [
//     "Pippi Calzelunghe",
//     2318,
//     true,
// ]

// let valorRandom = variablePrimitive[Math.floor(Math.random() * variablePrimitive.length)]

function d(variable) {
    return console.log(variable)
};

let primitive = 23;

switch (typeof primitive) {
    case "string":
        d("Esto es un String.")
        break;
    case "number":
        d("Esto es un Number.")
        break;
    case "boolean": d("Esto es un Boolean.")
        break;
    case "undefined": d("No hay ningún valor asignado.")
        break;
    default: d("No conozco aún ese valor.")
};

switch (typeof primitive) {
    case  Number:
        d ("Mi variable es de tipo número")
        break;
    case String:
        d ("Mi variable es de tipo cadena de letras")
        break;
    case Boolean:
        d ("Mi variable es de tipo verdadero o falso")
        break;
    case typeof(undefined):
        d ("Mi variable no está definida")
        break;
    default: 
        d ("No conozco ese tipo: ")
};
