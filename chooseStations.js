const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
];

const chooseStations = function (stations) {
  let goodStations = [];
  for (let i of stations) {
    const capasity = i[1];
    const venu = i[2];
    //console.log(capasity);
    //
    if (capasity >= 20 && (venu == "school" || venu == "community centre")) {
      goodStations.push(i[0]);
    }
  }
  return goodStations;
};

console.log(chooseStations(stations));
