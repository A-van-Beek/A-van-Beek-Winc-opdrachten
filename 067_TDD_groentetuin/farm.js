// test functie (AvB)
const testFunctionScript = () => {
  console.log("testing");
  return "testing";
};

// Get yield for plant with no environment factors
const getYieldForPlant = (crop) => {
  // console.log(`The yield of a single plant of corn is ${crop.yield}`);
  return crop.yield;
};

// Get yield for crop, simple
const getYieldForCrop = (input) => {
  const harvest = input.crop.yield * input.numCrops;
  // console.log(`The harvest of a field of ${input.crop.name} is ${harvest}`);
  return harvest;
};

// Calculate total yield with multiple crops
const getTotalYield = (crops) => {
  totalHarvest = 0;
  crops.forEach((crop) => {
    // console.log(crop.crop.name);
    if (crop.numCrops != 0) {
      totalHarvest += crop.crop.yield * crop.numCrops;
    }
  });
  // console.log(`The yield of all crops is ${totalHarvest}`);
  return totalHarvest;
};

// calculate cost multiple crops
const getCostsForCrop = (crops) => {
  totalCosts = 0;
  // console.log(crops);
  // console.log(crops[0].crop.name);
  // console.log(crops.numCrops);
  crops.forEach((crops) => {
    // console.log(crops.crop.name);
    // console.log(crops.numCrops);
    if (crops.numCrops != 0) {
      totalCosts += crops.numCrops * 1;
    }
  });
  // console.log(`The costs of the multiple crops is ${totalCosts}`);
  return totalCosts;
};

// calculate revenue single crop
const getRevenueForCrop = (crops) => {
  totalRevenue = 0;
  crops.forEach((crops) => {
    console.log(crops.crop.name);
    console.log(crops.numCrops);
    console.log(crops.crop.salePrice);
    if (crops.numCrops != 0) {
      totalRevenue += crops.numCrops * crops.crop.salePrice;
    }
  });
  console.log(`The revenue of the single crop is ${totalRevenue}`);
  return totalRevenue;
};

module.exports = {
  testFunctionScript,
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
};
