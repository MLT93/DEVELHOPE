function multiplyByTwo(externValue) {
  let multiplyingNumber = 2;
  const inner = () => externValue * multiplyingNumber;
  return inner;
}

console.log(multiplyByTwo(4)());
