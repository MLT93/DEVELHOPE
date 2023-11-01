setTimeout(() => {
  const printName = () => {
    let helloName = `"Hello John"`;
    const inner = () => helloName;
    console.log(inner());
  };
  printName();
}, 1000);

