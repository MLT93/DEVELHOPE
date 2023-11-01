// # Exercise 43

// We want to add to the `student` object a nested object called `personalData`, that has 3 properties: `name`, `surname`, `age`. Print in the console the `personalData` object.

const student = {
id: 1,
school: "Liceo",
year: 3,
};

// Creo una copia de student.
let student2 = {
  ...student, // Agrego a mi nuevo objeto, los valores de student.
  personalData: { // Creo una nueva propiedad anidada.
    namee: "Juanin", // Creo dentro de mi propiedad, un nuevo objeto con 3 propiedades a su vez.
    surname: "Ramirez",
    age: 43,
  },
};

console.log(student2.personalData);