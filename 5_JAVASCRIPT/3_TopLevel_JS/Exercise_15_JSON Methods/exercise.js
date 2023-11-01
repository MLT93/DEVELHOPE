class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  toJSON() {
    return JSON.stringify(this);
  }

  /* uso el objeto estático que le paso a Person.fromJson directamente, sin crear uno nuevo */
  static fromJson(obj) {
    const parsedData = JSON.parse(obj);
    return parsedData;
  }

  /* devuelve un nuevo objeto */
  static newFromJson(object) {
    const createNewData = JSON.parse(object);
    return new Person(
      createNewData.id,
      createNewData.firstName,
      createNewData.lastName,
      createNewData.age
    );
  }
}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);
const newDeveloper = Person.newFromJson(json);

console.log(developer);
console.log(newDeveloper);
