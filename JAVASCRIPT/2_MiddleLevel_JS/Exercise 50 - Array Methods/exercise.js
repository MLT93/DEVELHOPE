const names = ["Luca", "Marco", "Vittorio", "Giovanni"];
console.log("El array inicial es:", names);

/* Quito el último elemento */
names.pop();
console.log("El array después de .pop() es:", names);

/* Agrego al final del array */
names.push("Pippo");
console.log("El array después de .push() es:", names);

/* Agrego un elemento en el indice 2, sin eliminar nada y agregando "Giovanni" */
names.splice(2, 0, "Giovanni");
console.log("El array después de .splice() es:", names);
