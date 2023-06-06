// # Exercise 7

// * Convert the `hello` variable to a numeric data type and print it in the console.
// * Convert the `age` variable to a boolean data type and print it in the console.
// * Convert the `isGraduated` variable to a string data type and print it in the console.

// Try to explain the output of the `hello` variable casting.

let hello = 'Ciao';     // number
let age = 18;       // boolean
let isGraduated = false;     // string

let hello2 = 2
let age2 = false
let isGraduated2 = "Filipp"

console.log(
    hello,
    age,
    isGraduated,
)
console.log(
    hello2,
    age2,
    isGraduated2,
)

// # Exercise 7

// * Convert the `hello` variable to a numeric data type and print it in the console.
// * Convert the `age` variable to a boolean data type and print it in the console.
// * Convert the `isGraduated` variable to a string data type and print it in the console.

let hello3 = "ciao";  // number
// Output ---> NaN
let age3 = 18;       // boolean
// Output ---> true
let isGraduated3 = false;
// Output ---> false     // string     /* Aparece NaN

// Try to explain the output of the `hello` variable casting.

console.log(Number(hello3), Boolean(age3), String(isGraduated3));