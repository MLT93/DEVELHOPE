class Person {
  constructor(firstName, lastName) {
    this.nombre = firstName;
    this.apellidos = lastName;
  }
}

class Developer extends Person{
  constructor(firstName, lastName, role) {
    super (firstName, lastName);
    this.rol = role;
  }
}

const developer = new Developer("Mario", "Rossi", "Front-end");
console.log(
  developer.nombre + " " + developer.apellidos + " " + developer.rol
);
