let numberStore = [0, 1, 2];
let newNumber = 3;
/* numberStore.push(newNumber); */
console.log(numberStore); 

/* copio el array numberStore en otro array nuevo, añadiendo también la variable newNumber */
let newNumberStore = [...numberStore, newNumber];
console.log(newNumberStore);

/* por referencia modifico el array de numberStore */
numberStore = newNumberStore;
console.log(numberStore);
