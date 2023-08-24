const person1 = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
  address: {
    state: "Italy",
    city: "Rome",
    street: "Via Romano, 12",
  },
};

const person2 = { ...person1 };
person2.address.city = "Milan";

console.log(person1);
console.log(person2);


/* Primero obtengo un string JSON para mandarlo a la base de datos del objeto person1, después lo transformo de nuevo en un objeto con JSON.parse y lo guardo en la variable newPerson la cual puedo modificar tranquilamente porque la copia se realizó en profundidad. Debo recordar que esta copia realiza copias solo de valores primitivos, por lo que omitirá la copia de functions u otros elementos como NaN */
const newPerson = JSON.parse(JSON.stringify(person1));
newPerson.address.city = "Bari";

console.log(newPerson);
