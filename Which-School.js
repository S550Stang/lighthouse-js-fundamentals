function whichSchool(age) {
  var containingString = "";
  if (age < 13) {
    containingString = "Elementary School";
  } else if (age >= 13 && age < 18) {
    containingString = "Secondary School";
  } else if (age > 18) {
    containingString = "Lighthouse Labs";
  }
  return containingString;
}

console.log(whichSchool(100));
