function reverseString(arg) {
  let reversed = "";
  for (let i = arg.length - 1; i >= 0; i--) {
    reversed += arg[i];
  }
  return reversed;
}
console.log(reverseString("Prabhu"));
