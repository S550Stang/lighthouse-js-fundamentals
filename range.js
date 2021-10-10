let range = function (start, end, step) {
  let emptyArray = [];
  if (
    start > end ||
    step <= 0 ||
    step === undefined ||
    start === undefined ||
    end === undefined
  ) {
    return [];
  }
  for (let i = start; i <= end; i += step) {
    emptyArray.push(i);
  }
  return emptyArray;
};

callfun = range(0, 10, -1);

console.log(callfun);
