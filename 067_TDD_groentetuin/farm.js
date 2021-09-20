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

// Get yield for crop, include multiple factors
const getYieldForCrop = (crop) => {
  const inputSun = crop.sun;
  const inputWind = crop.wind;
  const inputRain = crop.rain;
  const inputYield = crop.crop.yield;
  const inputNumCrops = crop.numCrops;
  const inputCropName = crop.crop.name;
  const harvest = (
    inputYield *
    ((100 + crop.crop.factors.sun[inputSun]) / 100) *
    ((100 + crop.crop.factors.wind[inputWind]) / 100) *
    ((100 + crop.crop.factors.rain[inputRain]) / 100) *
    inputNumCrops
  ).toFixed(2);
  console.log(
    `The harvest of ${inputCropName} in the ${inputSun} sun, the ${inputWind} wind and the ${inputRain} rain is ${harvest}`
  );
  return harvest;
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
      sowingPriceCrop = crops.numCrops * crops.crop.sowingPrice;
      totalCosts += sowingPriceCrop;
    }
  });
  console.log(`The costs of the multiple crops is ${totalCosts}`);
  return totalCosts;
};

// calculate revenue single crop
const getRevenueForCrop = (crops) => {
  totalRevenue = 0;
  crops.forEach((crop) => {
    salePriceCrop = crop.crop.salePrice;
    harvest = getYieldForCrop(crop);
    totalRevenue += harvest * salePriceCrop;
  });
  console.log(`The sales revenue of the crops is ${totalRevenue}`);
  return totalRevenue;
};

const getProfitForCrop = (crops) => {
  totalProfit = getRevenueForCrop(crops) - getCostsForCrop(crops);
  console.log(`The gain of the crops is ${totalProfit}`);
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
