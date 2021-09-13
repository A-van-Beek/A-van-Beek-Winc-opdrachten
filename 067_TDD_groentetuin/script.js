// hier het script
console.log("Welkom bij de console.log");

const corn = {
  name: "corn",
  yield: 3,
};

const pumpkin = {
  name: "pumpkin",
  yield: 4,
};

const crops = [
  { crop: corn, numCrops: 5 },
  { crop: pumpkin, numCrops: 2 },
];

const input = {
  crop: corn,
  numCrops: 10,
};
getYieldForPlant(corn);
getYieldForCrop(input);
getTotalYield(crops);
