
const functionCallback = () => {
  console.log("Hello");
};

const repeatHello = (otherFunction) => {
  let intervalID = setInterval(() => {
    otherFunction();
  }, 1000);

  setTimeout(() => {
    clearInterval(intervalID);
    console.log("Repetición detenida");
  }, 5000);
};

repeatHello(functionCallback);
