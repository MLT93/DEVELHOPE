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

  // Getter para obtener el apellido
  get apellido() {
    return this._lastName;
  }

  // Getter para obtener la edad
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

  // Setter para modificar el apellido
  set apellido(nuevoApellido) {
    this._lastName = nuevoApellido;
  }

  // Setter para modificar la edad
  set años(nuevaEdad) {
    this._age = nuevaEdad;
  }
}

// Crear una instancia de la clase Person
const person = new Person("Mario", "Rossi", 25);

// Obtener y mostrar el nombre completo utilizando el getter
console.log(person.fullName); // Salida: "Mario Rossi"

// Cambiar el primer nombre utilizando el setter
person.nombre = "Maria";

// Cambiar el apellido utilizando el setter
person.apellido = "Verdi";

// Obtener y mostrar el nuevo nombre completo utilizando el getter
console.log(person.fullName); // Salida: "Maria Verdi"
