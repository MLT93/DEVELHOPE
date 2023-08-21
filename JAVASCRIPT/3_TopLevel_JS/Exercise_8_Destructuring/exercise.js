function isAdult(person) {
  return person.age >= 18;
}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const person2 = { ...person, age: 15 };

console.log(isAdult(person2));

