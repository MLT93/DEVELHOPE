class Person {
  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  // Getter para obtener el primer nombre
  get nombre() {
    return this._firstName;
  }

  get apellido() {
    return this._lastName;
  }

  get años() {
    return this._age;
  }

  // Getter para obtener el nombre completo
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  // Setter para modificar el primer nombre
  set nombre(nuevoNombre) {
    this._firstName = nuevoNombre;
  }

  set apellido(nuevoApellido) {
    this._lastName = nuevoApellido;
  }

  // Setter para modificar la edad
  set años(nuevaEdad) {
    this._age = nuevaEdad;
  }
}

// Creo una instancia de la clase Person
const person = new Person("Mario", "Rossi", 25);

// Imprimo nombre completo con el getter
console.log(person.fullName);

// Cambiar el primer nombre utilizando el setter
person.nombre = "Maria";

person.apellido = "Verdi";

console.log(person.fullName);
