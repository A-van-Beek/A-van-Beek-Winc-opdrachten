// const { getCostsForCrop } = require("./farm");

// hier het script
console.log("Welkom bij de console.log");

const corn = {
  name: "corn",
  yield: 3,
  salePrice: 2,
};

const pumpkin = {
  name: "pumpkin",
  yield: 4,
  salePrice: 3,
};

const lettuce = {
  name: "lettuce",
  yield: 2,
  salePrice: 4,
};

const crops = [
  { crop: corn, numCrops: 2 },
  { crop: pumpkin, numCrops: 5 },
  // { crop: lettuce, numCrops: 0 },
];

const input = {
  crop: corn,
  numCrops: 10,
};

// getYieldForPlant(corn);
// getYieldForCrop(input);
// getTotalYield(crops);
// getCostsForCrop(crops);
getRevenueForCrop(crops);
