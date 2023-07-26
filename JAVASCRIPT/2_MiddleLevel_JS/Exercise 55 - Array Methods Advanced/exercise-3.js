function calculateAverageAge(persons) {
  let mediaEdades = 0;
  for (let index = 0; index < persons.length; index++) {
    console.log("La edad del usuario en el indice", index, "es de:", persons[index].age, "años");
    mediaEdades += persons[index].age;
  };
  console.log("La suma de edades es:", mediaEdades);
  let result = [];
  const ageAverage = () => {
    mediaEdades /= persons.length;
    result.push(mediaEdades);
  };
  ageAverage();
  return `La media de edad es: ${result}`;
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

const average = calculateAverageAge(persons);
console.log(persons);
console.log(average);
