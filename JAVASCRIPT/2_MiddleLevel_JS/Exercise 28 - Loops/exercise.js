// Creo una variable para almacenar la suma
let sumaDeNumbers = 0;

// El loop que recorre los números del 0 al 10
for (let index = 0; index <= 10; index++) {
  console.log(index);
  // sumaDeNumbers += index;
  sumaDeNumbers = sumaDeNumbers + index; 
}

// Imprimimos la suma de todos los números
console.log(sumaDeNumbers);
