const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* 1: porque es el valor del primer elemento en el array */
console.log(numbers[0]);

/* 10: nos da 10 porque es el valor correspondiente al último elemento del array */
console.log(numbers[numbers.length - 1]);

/* 10: imprime 10 porque hay 10 elementos en el interior del array */
console.log(numbers.length);

/* Undefined: sale esto porque el array no contiene esa cantidad de elementos en su interior */
console.log(numbers.length[20]);
