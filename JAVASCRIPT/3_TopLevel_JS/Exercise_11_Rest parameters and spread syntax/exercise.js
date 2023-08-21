function sum(num1, num2, num3, num4, num5) {
    return num1 + num2 + num3 + num4 + num5;
}

console.log(sum(1, 2, 3, 4, 5));

function sum2(...num) {
  return num.reduce((a, b) => a + b);
}

console.log(sum2(1, 2, 3, 4, 5, 6, 7, 8, 9));
