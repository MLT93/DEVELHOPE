const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

names.pop(); // Esto sólo quita. Es mejor el .splice porque quita y añade
console.log(names);

names.push("Pippo");
console.log(names);

names.unshift("Giovanni");
console.log(names);
