// test functie (AvB)
const testFunctionScript = () => {
  console.log("testing");
  return "testing";
};

const corn = {
  name: "corn",
  yield: 30,
};

const pumpkin = {
  name: "pumpkin",
  yield: 4,
};

// Get yield for plant with no environment factors
const getYieldForPlant = (crop) => {
  console.log(crop.yield);
  return crop.yield;
};

module.exports = {
  testFunctionScript,
  getYieldForPlant,
  // getYieldForCrop,
  // getTotalYield,
};
