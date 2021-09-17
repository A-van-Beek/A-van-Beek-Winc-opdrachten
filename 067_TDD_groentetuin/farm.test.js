const farmFunctions = require("./farm");

const vegetables = require("./constants.js");
// tests from Winc, do NOT change !

// kleine test voor de koppeling
test("Console.log vanuit farm.js is testing", () => {
  expect(farmFunctions.testFunctionScript()).toBe("testing");
});

describe("getYieldForPlant", () => {
  test("Get yield for plant with no environment factors", () => {
    expect(farmFunctions.getYieldForPlant(vegetables.corn)).toBe(3);
  });
});

describe("getYieldForCrop", () => {
  test("Get yield for crop, simple, no environmental factors", () => {
    const crops = {
      crop: vegetables.corn,
      numCrops: 2,
    };
    expect(farmFunctions.getYieldForCrop(crops)).toBe(6);
  });
  test("Get yield for crop, 1 environmental factor", () => {
    const crops = {
      crop: vegetables.corn,
      numCrops: 2,
      sun: "low",
    };
    expect(farmFunctions.getYieldForCrop(crops)).toBe(3);
  });
  test("Get yield for crop, 1 environmental factor medium", () => {
    const crops = {
      crop: vegetables.corn,
      numCrops: 2,
      sun: "medium",
    };
    expect(farmFunctions.getYieldForCrop(crops)).toBe(6);
  });
});

describe("getTotalYield", () => {
  test("Calculate total yield with multiple crops", () => {
    const crops = [
      { crop: vegetables.corn, numCrops: 5 },
      { crop: vegetables.pumpkin, numCrops: 2 },
    ];
    expect(farmFunctions.getTotalYield(crops)).toBe(23);
  });

  test("Calculate total yield with 0 amount", () => {
    const crops = [{ crop: vegetables.corn, numCrops: 0 }];
    expect(farmFunctions.getTotalYield(crops)).toBe(0);
  });

  test("Calculate total yield with multiple crops, including 1 environmental factor", () => {
    const crops = [
      { crop: vegetables.corn, numCrops: 5, sun: "high" },
      { crop: vegetables.pumpkin, numCrops: 2 },
    ];
    expect(farmFunctions.getTotalYield(crops)).toBe(30.5);
  });
});

// describe("getCostsForCrop", () => {
//   test("Calculate cost per crop", () => {
//     const crops = [{ crop: vegetables.corn, numCrops: 5 }];
//     expect(farmFunctions.getCostsForCrop(crops)).toBe(5);
//   });
//   test("Calculate cost multiple crops", () => {
//     const crops = [
//       { crop: vegetables.corn, numCrops: 5 },
//       { crop: vegetables.pumpkin, numCrops: 2 },
//     ];
//     expect(farmFunctions.getCostsForCrop(crops)).toBe(7);
//   });
//   test("Calculate total costs with 0 amount", () => {
//     const crops = [
//       { crop: vegetables.corn, numCrops: 5 },
//       { crop: vegetables.pumpkin, numCrops: 0 },
//     ];
//     expect(farmFunctions.getCostsForCrop(crops)).toBe(5);
//   });
// });

// describe("getRevenueForCrop", () => {
//   test("Calculate revenue per single crop", () => {
//     const crops = [{ crop: vegetables.corn, numCrops: 5 }];
//     expect(farmFunctions.getRevenueForCrop(crops)).toBe(10);
//   });
//   test("Calculate revenue multiple crops", () => {
//     const crops = [
//       { crop: vegetables.corn, numCrops: 5 },
//       { crop: vegetables.pumpkin, numCrops: 2 },
//     ];
//     expect(farmFunctions.getRevenueForCrop(crops)).toBe(16);
//   });
//   test("Calculate revenue with 0 amount crop", () => {
//     const crops = [
//       { crop: vegetables.corn, numCrops: 5 },
//       { crop: vegetables.pumpkin, numCrops: 0 },
//     ];
//     expect(farmFunctions.getRevenueForCrop(crops)).toBe(10);
//   });
// });

// describe("getProfitForCrop", () => {
//   test("Calculate profit per single crop", () => {
//     const crops = [{ crop: vegetables.corn, numCrops: 5 }];
//     expect(farmFunctions.getProfitForCrop(crops)).toBe(5);
//   });
//   test("Calculate profit multiple crops", () => {
//     const crops = [
//       { crop: vegetables.corn, numCrops: 2 },
//       { crop: vegetables.pumpkin, numCrops: 5 },
//     ];
//     expect(farmFunctions.getProfitForCrop(crops)).toBe(12);
//   });
//   test("Calculate profits with 0 amount crop", () => {
//     const crops = [
//       { crop: vegetables.corn, numCrops: 2 },
//       { crop: vegetables.pumpkin, numCrops: 5 },
//       { crop: vegetables.lettuce, numCrops: 0 },
//     ];
//     expect(farmFunctions.getProfitForCrop(crops)).toBe(12);
//   });
// });
