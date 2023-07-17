// Try to predict the output of the comparisons before printing them in the console.

const name = "Mario";
const lastName = "Rossi";
const age = 27;
const isGraduated = false;
const average = 27;
const examsCompleted = 10;
const firstYearCompleted = true;
const yearsCompleted = 1;

name == lastName // false
age <= average // true
firstYearCompleted == lastName // false
yearsCompleted == firstYearCompleted // true (==)
firstYearCompleted === yearsCompleted // false (===)
examsCompleted < age // true
isGraduated > yearsCompleted // false
