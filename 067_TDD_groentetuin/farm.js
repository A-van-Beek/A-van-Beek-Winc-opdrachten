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

// Get yield for crop, include factors
const getYieldForCrop = (crop) => {
  if (crop.sun === undefined) {
    const inputSun = "medium";
    const inputYield = crop.crop.yield;
    const inputNumCrops = crop.numCrops;
    const inputCropName = crop.crop.name;
    const harvest =
      inputYield *
      ((100 + crop.crop.factors.sun[inputSun]) / 100) *
      inputNumCrops;
    console.log(
      `The harvest of ${inputCropName}, no environmental factor is ${harvest}`
    );
    return harvest;
  } else {
    const inputSun = crop.sun;
    const inputYield = crop.crop.yield;
    const inputNumCrops = crop.numCrops;
    const inputCropName = crop.crop.name;
    const harvest =
      inputYield *
      ((100 + crop.crop.factors.sun[inputSun]) / 100) *
      inputNumCrops;
    console.log(
      `The harvest of ${inputCropName} in the ${inputSun} sun is ${harvest}`
    );
    return harvest;
  }
};

// Calculate total yield with multiple crops
const getTotalYield = (crops) => {
  totalHarvest = 0;
  crops.forEach((crop) => {
    if (crop.numCrops != 0) {
      totalHarvest += getYieldForCrop(crop);
    }
  });
  console.log(`The total yield of all crops is ${totalHarvest}`);
  return totalHarvest;
};

// calculate cost multiple crops
const getCostsForCrop = (crops) => {
  totalCosts = 0;
  crops.forEach((crops) => {
    if (crops.numCrops != 0) {
      totalCosts += crops.numCrops * 1;
    }
  });
  console.log(`The costs of the multiple crops is ${totalCosts}`);
  return totalCosts;
};

// calculate revenue single crop
const getRevenueForCrop = (crops) => {
  totalRevenue = 0;
  crops.forEach((crops) => {
    if (crops.numCrops != 0) {
      totalRevenue += crops.numCrops * crops.crop.salePrice;
    }
  });
  console.log(`The revenue of the crops is ${totalRevenue}`);
  return totalRevenue;
};

const getProfitForCrop = (crops) => {
  totalProfit = getRevenueForCrop(crops) - getCostsForCrop(crops);
  console.log(`The revenue of the crops is ${totalProfit}`);
  return totalProfit;
};

const farmFunctions = {
  testFunctionScript,
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
};

module.exports = farmFunctions;
