const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

/* const id = person.id;
const firstName = person.firstName;
const lastName = person.lastName;
const age = person.age; */

const { id = 0, firstName = 0, lastName = 0, age = 0 } = { id: person.id, firstName: person.firstName, lastName: person.lastName, age: person.age };
const [a = 0, b = 0, c = 0, d = 0] = [person.id, person.firstName, person.lastName, person.age];

console.log(id, firstName, lastName, age);
console.log(a, b, c, d);