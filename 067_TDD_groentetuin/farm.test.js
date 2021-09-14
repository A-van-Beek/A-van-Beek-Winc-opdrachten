const farmFunctions = ({
  testFunctionScript,
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
} = require("./farm"));

const vegetables = require("./constants.js");
// tests from Winc, do NOT change !

// kleine test voor de koppeling
test("Console.log vanuit farm.js is testing", () => {
  expect(farmFunctions.testFunctionScript()).toBe("testing");
});

describe("getYieldForPlant", () => {
  test("Get yield for plant with no environment factors", () => {
    expect(getYieldForPlant(vegetables.corn)).toBe(3);
  });
});

describe("getYieldForCrop", () => {
  test("Get yield for crop, simple", () => {
    const input = {
      crop: vegetables.corn,
      numCrops: 10,
    };
    expect(getYieldForCrop(input)).toBe(30);
  });
});

describe("getTotalYield", () => {
  test("Calculate total yield with multiple crops", () => {
    const crops = [
      { crop: vegetables.corn, numCrops: 5 },
      { crop: vegetables.pumpkin, numCrops: 2 },
    ];
    expect(getTotalYield(crops)).toBe(23);
  });

  test("Calculate total yield with 0 amount", () => {
    const crops = [{ crop: vegetables.corn, numCrops: 0 }];
    expect(getTotalYield(crops)).toBe(0);
  });
});

describe("getCostsForCrop", () => {
  test("Calculate cost per crop", () => {
    const crops = [{ crop: vegetables.corn, numCrops: 5 }];
    expect(getCostsForCrop(crops)).toBe(5);
  });
  test("Calculate cost multiple crops", () => {
    const crops = [
      { crop: vegetables.corn, numCrops: 5 },
      { crop: vegetables.pumpkin, numCrops: 2 },
    ];
    expect(getCostsForCrop(crops)).toBe(7);
  });
  test("Calculate total costs with 0 amount", () => {
    const crops = [
      { crop: vegetables.corn, numCrops: 5 },
      { crop: vegetables.pumpkin, numCrops: 0 },
    ];
    expect(getCostsForCrop(crops)).toBe(5);
  });
});

describe("getRevenueForCrop", () => {
  test("Calculate revenue per single crop", () => {
    const crops = [{ crop: vegetables.corn, numCrops: 5 }];
    expect(getRevenueForCrop(crops)).toBe(10);
  });
  test("Calculate revenue multiple crops", () => {
    const crops = [
      { crop: vegetables.corn, numCrops: 5 },
      { crop: vegetables.pumpkin, numCrops: 2 },
    ];
    expect(getRevenueForCrop(crops)).toBe(16);
  });
  test("Calculate revenue with 0 amount crop", () => {
    const crops = [
      { crop: vegetables.corn, numCrops: 5 },
      { crop: vegetables.pumpkin, numCrops: 0 },
    ];
    expect(getRevenueForCrop(crops)).toBe(10);
  });
});

describe("getProfitForCrop", () => {
  test("Calculate profit per single crop", () => {
    const crops = [{ crop: vegetables.corn, numCrops: 5 }];
    expect(getProfitForCrop(crops)).toBe(5);
  });
  test("Calculate profit multiple crops", () => {
    const crops = [
      { crop: vegetables.corn, numCrops: 2 },
      { crop: vegetables.pumpkin, numCrops: 5 },
    ];
    expect(getProfitForCrop(crops)).toBe(12);
  });
  test("Calculate profits with 0 amount crop", () => {
    const crops = [
      { crop: vegetables.corn, numCrops: 2 },
      { crop: vegetables.pumpkin, numCrops: 5 },
      { crop: vegetables.lettuce, numCrops: 0 },
    ];
    expect(getProfitForCrop(crops)).toBe(12);
  });
});
