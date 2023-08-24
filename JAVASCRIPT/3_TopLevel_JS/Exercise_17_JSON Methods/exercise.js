const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const newPerson = JSON.parse(JSON.stringify(person));
console.log(newPerson.age);

const reducedKeys = { id: newPerson.id, age: newPerson.age };
console.log(reducedKeys);

const json = JSON.stringify(reducedKeys);
console.log(json); // Should return: { "id": 1, "age": 25 }
