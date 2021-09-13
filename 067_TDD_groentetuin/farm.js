// test functie (AvB)
const testFunctionScript = () => {
  console.log("testing");
  return "testing";
};

// Get yield for plant with no environment factors
const getYieldForPlant = (crop) => {
  console.log(`The yield of a single plant of corn is ${crop.yield}`);
  return crop.yield;
};

// Get yield for crop, simple
const getYieldForCrop = (input) => {
  const harvest = input.crop.yield * input.numCrops;
  console.log(`The harvest of a field of ${input.crop.name} is ${harvest}`);
  return harvest;
};

// Calculate total yield with multiple crops
const getTotalYield = (crops) => {
  totalHarvest = 0;
  crops.forEach((crop) => {
    console.log(crop.crop.name);
    if (crop.numCrops != 0) {
      totalHarvest += crop.crop.yield * crop.numCrops;
    }
  });
  console.log(`The yield of all crops is ${totalHarvest}`);
  return totalHarvest;
};

module.exports = {
  testFunctionScript,
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
};
