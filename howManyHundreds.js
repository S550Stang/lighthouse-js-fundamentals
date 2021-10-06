const howManyHundreds = function (number) {
  let calculator = number / 100;

  if (number < 100) {
    return 0;
  } else {
    return Math.floor(calculator);
  }
};
console.log(howManyHundreds(568));
