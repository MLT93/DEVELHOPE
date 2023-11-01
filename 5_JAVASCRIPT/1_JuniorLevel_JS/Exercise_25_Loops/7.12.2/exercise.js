// # Exercise 25

// Print in the console the numbers from 0 to -10

for (let num = -10; num <= 0; num++) {  // El <++> va sumando un número cada vez que el bucle completa una vuelta.
    console.log(num)
}; // Acá lo hice al revés, o sea, de menos a más



// Ahora lo haré de más a menos
for (let numerador = 0; numerador >= -10; numerador--) { // El <--> va restándo un número cada vez que el bucle completa una vuelta.
    console.log(numerador)
};

// Creo un <Array> vacío para guardar cosas dentro.
let miArrayDeNumeros = [];
// Creo un <Bucle For> en en el cual imprimo los números del 0 al 10 y después los añado al final de mi <Array> con el <.push> 
for (let numInArray = 0; numInArray <= 10; numInArray++) {
    miArrayDeNumeros.push(numInArray)
    console.log(`Vuelta del bucle guardado en el Array ${miArrayDeNumeros}`)
};

// Lo mismo hacemos con números negativos.
let miArrayDeNumerosNegativos = [];

for (let numNeg = 0; numNeg >= -10; numNeg--){
  miArrayDeNumerosNegativos.push(numNeg)
  console.log(miArrayDeNumerosNegativos)
};

