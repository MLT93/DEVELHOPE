const students = [
  { id: 1, name: "Luca", surname: "Rossi", age: 20 },
  { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
  { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];

/* En el índice 2, elimino 1 elemento y agrego al array el nuevo objeto */
students.splice(2, 1, students[students.length - 1] = {id: 3, name: "Francesco", surname: "Verdi", age: 41});
console.log(students);
