// Class definition

class Person {
    constructor(firstName, lastName) {
        this.nombre = firstName;
        this.apellido = lastName;
    }
}

const developer = new Person('Mario', 'Rossi');
console.log(developer.nombre + " " + developer.apellido);
