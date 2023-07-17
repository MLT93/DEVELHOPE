const name = "Mario";
const lastName = "Rossi";
const age = 27;
const isGraduated = false;
const average = 27;
const examsCompleted = 10;
const firstYearCompleted = true;
const yearsCompleted = 1;

console.log(name == lastName);                      // Output: false
console.log(age <= average);                        // Output: true
console.log(firstYearCompleted == lastName);        // Output: false
console.log(yearsCompleted == firstYearCompleted);  // Output: true
console.log(firstYearCompleted === yearsCompleted); // Output: false
console.log(examsCompleted < age);                  // Output: true
console.log(isGraduated > yearsCompleted);          // Output: false
