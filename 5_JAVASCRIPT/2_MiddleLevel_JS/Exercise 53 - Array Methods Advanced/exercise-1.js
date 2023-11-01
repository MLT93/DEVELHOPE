function adultFilter(persons) {
  let personasMayores = [];
  let personasMenores = [];
  persons.forEach((persona) => {
    if (persona.age >= 18) {
      personasMayores.push(`${persona.name} tiene ${persona.age} años`);
    } else {
      personasMenores.push(`${persona.name} tiene ${persona.age} años`);
    }
  })
  return { personasMayores, /* personasMenores */ };
};

const persons = [
  { name: "Paul", age: 16 },
  { name: "George", age: 17 },
  { name: "Lucas", age: 21 },
  { name: "Marco", age: 32 },
  { name: "Peter", age: 18 },
  { name: "Carl", age: 13 },
  { name: "Simon", age: 24 },
  { name: "Mark", age: 15 },
  { name: "Sandra", age: 34 },
  { name: "Alice", age: 28 },
];

const adults = adultFilter(persons);
console.log(persons);
console.log(adults);
