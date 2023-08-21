const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

/* var id = person.id;
var personInfo = {
  firstName: person.firstName,
  lastName: person.lastName,
  age: person.age
}; */

const info = { ...person,  id: 3 };
console.log(info);

var { id, ...personInfo } = person;
console.log(id, personInfo);
