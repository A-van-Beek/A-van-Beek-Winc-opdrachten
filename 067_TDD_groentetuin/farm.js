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
  console.log(`The yield of a field of ${input.crop.name} is ${harvest}`);
  return harvest;
};

module.exports = {
  testFunctionScript,
  getYieldForPlant,
  getYieldForCrop,
  // getTotalYield,
};
