let primitive = 0;

switch (primitive) {
  case String(primitive):
    console.log(primitive, typeof(primitive));
    break;
  case Number(primitive):
    console.log(primitive, typeof(primitive));
    break;
  case Boolean(primitive):
    console.log(primitive, typeof(primitive));
    break;

  default:
    break;
}
