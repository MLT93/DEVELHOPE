const nombre = "Marquitos";

const saludar = () => {
  console.log(`Hello`);
};

const printAsyncName = (otherFunction, text) => {
  let intervaloID = setInterval(() => {
    otherFunction();
  }, 1000);

  setTimeout(() => {
    console.log(text);
  }, 2000);

  setTimeout(() => {
    clearInterval(intervaloID);
    console.log("Repetición detenida");
  }, 2000);
};

printAsyncName(saludar, nombre);
