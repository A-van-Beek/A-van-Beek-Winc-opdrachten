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

const input = {
  crop: corn,
  numCrops: 10,
};
getYieldForPlant(corn);
getYieldForCrop(input);
