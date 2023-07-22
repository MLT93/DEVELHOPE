let primitive = "";

if (typeof(primitive === "number") || typeof(primitive === "string")) {
  console.log(primitive, typeof(primitive));
} else if (typeof(primitive === undefined) || typeof(primitive === "boolean")) {
  console.log(primitive, typeof(primitive));
}

console.log(Number(primitive));
console.log(String(primitive));
console.log(Boolean(primitive));
