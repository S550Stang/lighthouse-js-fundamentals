const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  if (repeat === 5) {
    console.log("*change key*");
  } else if (repeat === 8) {
    console.log("*go back to the same key");
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");
