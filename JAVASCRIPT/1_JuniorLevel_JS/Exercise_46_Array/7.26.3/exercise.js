// # Exercise 46

// Given the following array:

const students = [
  { id: 1, name: "Luca", surname: "Rossi", age: 20 },
  { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
  { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];

// Print all the elements of the array.

// **Suggestion**
// Use a for loop.

function recorrerMiArray() {
  for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
  };
};
 recorrerMiArray();