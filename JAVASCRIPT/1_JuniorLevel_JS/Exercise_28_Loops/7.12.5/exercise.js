// # Exercise 28

// Use a for loop to print all the numbers from 0 to 10 and their sum. The output should be:
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 55


let cajaDeNumeros = 0;

for (let num = 0; num <=10; num++){
    console.log("La vuelta del bucle va así -> " + num)
    cajaDeNumeros = cajaDeNumeros + num
    // console.log("La suma de los números a medida que el búcle va girando es " + cajaDeNumeros)
};

console.log("La suma de los números = " + cajaDeNumeros)

// Si dejo adentro del bucle, el console.log() de cajaDeNumeros, me muestra la suma de esos números a medida que el bucle gira. Mientras que, si lo dejo afuera me imprime únicamente la suma final de todos los números del bucle.