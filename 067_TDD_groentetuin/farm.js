// test functie (AvB)
const testFunctionScript = () => {
  console.log("testing");
  return "testing";
};

const corn = {
  name: "corn",
  yield: 30,
};

// Get yield for plant with no environment factors
const getYieldForPlant = (corn) => {
  return corn.yield;
};

module.exports = {
  testFunctionScript,
  getYieldForPlant,
  // getYieldForCrop,
  // getTotalYield,
};
