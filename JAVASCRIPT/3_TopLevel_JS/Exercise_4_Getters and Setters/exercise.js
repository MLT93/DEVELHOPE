class Person {
  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  // Getter para obtener el primer nombre
  get getNombre() {
    return this._firstName;
  }

  get getApellido() {
    return this._lastName;
  }

  get getAños() {
    return this._age;
  }

  // Getter para obtener el nombre completo
  get getFullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  // Setter para modificar el primer nombre
  set setNombre(nuevoNombre) {
    this._firstName = nuevoNombre;
  }

  set setApellido(nuevoApellido) {
    this._lastName = nuevoApellido;
  }

  // Setter para modificar la edad
  set setAños(nuevaEdad) {
    this._age = nuevaEdad;
  }
}

// Creo una instancia de la clase Person
const person = new Person("Mario", "Rossi", 25);

// Imprimo nombre completo con el getter
console.log(person.getFullName);

// Cambiar el primer nombre utilizando el setter
person.setNombre = "Maria";

person.setApellido = "Verdi";

console.log(person.getFullName);
