var laugh = function (laughParameter) {
  var finalLaugh = "";
  for (var i = 0; i < laughParameter; i++) {
    finalLaugh += "ha";
  }
  finalLaugh += "!";
  return finalLaugh;
};

console.log(laugh(10));
