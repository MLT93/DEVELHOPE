
const printName = () => {
  let helloName = `"Hello John"`
  const inner = () => helloName;
  return inner();
};

console.log(printName());
