// # Exercise 40

// Starting from the exercise 39, do you know any other way to copy the `user` object without changing its properties?

// **Suggestion**
// This time you wouldn't need a `for in` loop.
// You would need a new copy of the `user` object
// You can find some useful [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

let user = {
  name: "Cosimo",
  age: 30,
};

let newUser = user;

newUser.name = "Paolo";

let cloneObject = {...user};
console.log(cloneObject);
