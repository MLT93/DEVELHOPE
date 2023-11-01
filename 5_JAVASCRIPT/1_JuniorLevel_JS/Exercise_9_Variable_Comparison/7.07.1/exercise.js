// # Exercise 9

// * Try to predict the output of the comparisons before printing them in the console

const nombre = "Mario";
const lastnombre = "Rossi";
const age = 27;
const isGraduated = false;
const average = 27;
const examsCompleted = 10;
const firstYearCompleted = true;
const yearsCompleted = 1;

nombre == lastnombre // False
age <= average // True
firstYearCompleted == lastnombre // False
yearsCompleted == firstYearCompleted // True
firstYearCompleted === yearsCompleted // True -> es False, porque no es exáctamente/estríctamente igual (===) 
examsCompleted < age // True
isGraduated > yearsCompleted // False

console.log(
    nombre,
    age,
    firstYearCompleted,
    yearsCompleted,
    firstYearCompleted,
    examsCompleted,
    isGraduated,
    )