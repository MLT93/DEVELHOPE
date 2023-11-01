function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}

const numbers = [1, 2, 3];
/* Pasando los elementos individuales del array numbers como argumentos a la función utilizando el Spread Operator */
console.log(sum(...numbers));
