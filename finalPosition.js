const moves = ["north", "north", "west", "west", "north", "east", "north"];

const finalPosition = function (moves) {
  let finalPosition = [0, 0]; //[(east,west),(north,south)]
  for (const move of moves) {
    switch (move) {
      case "north":
        finalPosition[1] += 1;
        break;
      case "east":
        finalPosition[0] += 1;
        break;
      case "south":
        finalPosition[1] -= 1;
        break;
      case "west":
        finalPosition[0] -= 1;
        break;
    }
  }
  return finalPosition;
};
console.log(finalPosition(moves));
