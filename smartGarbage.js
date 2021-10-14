const smartGarbage = function (trash, bins) {
  const smartTrash = trash;
  const smartBins = bins;
  if (smartTrash === "recycling") {
    smartBins.recycling += 1;
    return smartBins;
  } else if (smartTrash === "waste") {
    smartBins.waste += 1;
    return smartBins;
  } else if (trash === "compost") {
    smartBins.compost += 1;
    return smartBins;
  }
};
console.log(smartGarbage("recycling", { waste: 4, recycling: 2, compost: 5 }));
console.log(smartGarbage("waste", { waste: 4, recycling: 2, compost: 5 }));
console.log(smartGarbage("compost", { waste: 4, recycling: 2, compost: 5 }));
