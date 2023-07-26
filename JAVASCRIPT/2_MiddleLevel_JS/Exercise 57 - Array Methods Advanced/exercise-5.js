/* function sortPeopleByAge(arr) {
  return arr.sort((numeroMayor, numeroMenor) => {
    const edadMasGrande = numeroMayor.age,
          edadMenosGrande = numeroMenor.age;

    if (edadMasGrande < edadMenosGrande) {
      return -1;
    }

    if (edadMasGrande > edadMenosGrande) {
      return 1;
    }

    return 0;
  });
} */

/* Lo hago más corto */
function sortPeopleByAge(arr) {
  return arr.sort((numeroMayor, numeroMenor) => numeroMayor.age - numeroMenor.age);
}

const people = [
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

const sortingByAge = sortPeopleByAge(people);
console.log(sortingByAge);
