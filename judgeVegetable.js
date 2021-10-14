const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 25,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const metric = "redness";

let judgeVegetable = function (vegetables, metric) {
  let num1 = vegetables[0];
  let num2 = vegetables[1];
  let num3 = vegetables[2];

  if (
    metric === metric &&
    (num1.redness > num2.redneess || num1.redness > num3.redness)
  ) {
    return num1.submitter;
  } else if (
    metric === metric &&
    (num2.redness > num1.redneess || num2.redness > num3.redness)
  ) {
    return num2.submitter;
  } else if (
    metric === metric &&
    (num3.redness > num2.redneess || num3.redness > num1.redness)
  ) {
    return num3.submitter;
  }
};
console.log(judgeVegetable(vegetables, metric));
