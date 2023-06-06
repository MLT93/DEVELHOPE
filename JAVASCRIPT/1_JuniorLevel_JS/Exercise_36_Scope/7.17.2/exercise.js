// # Exercise 36

// If you try to run this function, you'll get an error. Fix the function and assign to the variable `sport` a global scope. How can we do this?

let sport = " Football";

function canPlay() {

    if (true) {

        let personName = "Cosimo";
        console.log(personName + sport);
    };
    
};

canPlay();
