class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

const developer = new Person(1, "Mario", "Rossi", 25);

// Print developer object into json
console.log(JSON.stringify(developer));;
const stringJson = JSON.stringify(developer);
console.log(typeof stringJson);
