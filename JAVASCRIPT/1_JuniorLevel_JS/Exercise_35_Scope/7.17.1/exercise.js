// # Exercise 35

// If you run this function, you'll get an error. Fix the function and explain briefly what's wrong.

function canPlay() {
  let sport = " Football";
    
  if (true) {
  let personName = "Cosimo"; // La variable no es utilizada al interno del IF-ELSE y tampoco está declarada en la función, ésto causará un error.
  };
  console.log(personName + sport);
};
  
canPlay();
  
// **Suggestion**
// Be careful with the variables scope.


// Ejercicio corregido
function canPlay2() {
  let sport2 = " Boxe";
    
  if (true) {
    let personName2 = "Marcos"; // Ahora la variable es utilizada dentro del IF-ELSE y dentro de la función
    console.log(personName2 + sport2);
  };
};

canPlay2();