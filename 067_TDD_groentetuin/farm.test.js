const farmFunctions = ({
  testFunctionScript,
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
} = require("./farm"));
// tests from Winc, do NOT change !

// kleine test voor de koppeling
test("Console.log vanuit farm.js is testing", () => {
  expect(farmFunctions.testFunctionScript()).toBe("testing");
});

describe("getYieldForPlant", () => {
  const corn = {
    name: "corn",
    yield: 30,
  };
  const pumpkin = {
    name: "pumpkin",
    yield: 4,
  };

  test("Get yield for plant with no environment factors", () => {
    expect(getYieldForPlant(corn)).toBe(30);
  });
});

describe("getYieldForCrop", () => {
  test("Get yield for crop, simple", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const input = {
      crop: corn,
      numCrops: 10,
    };
    expect(getYieldForCrop(input)).toBe(30);
  });
});

describe("getTotalYield", () => {
  test("Calculate total yield with multiple crops", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
    };
    const crops = [
      { crop: corn, numCrops: 5 },
      { crop: pumpkin, numCrops: 2 },
    ];
    expect(getTotalYield(crops)).toBe(23);
  });

  test("Calculate total yield with 0 amount", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const crops = [{ crop: corn, numCrops: 0 }];
    expect(getTotalYield(crops)).toBe(0);
  });
});

describe("getCostsForCrop", () => {
  test("Calculate cost per crop", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
    };
    const crops = [{ crop: corn, numCrops: 5 }];
    expect(getCostsForCrop(crops)).toBe(5);
  });
  test("Calculate cost multiple crops", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
    };
    const crops = [
      { crop: corn, numCrops: 5 },
      { crop: pumpkin, numCrops: 2 },
    ];
    expect(getCostsForCrop(crops)).toBe(7);
  });
  test("Calculate total costs with 0 amount", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
    };
    const crops = [
      { crop: corn, numCrops: 5 },
      { crop: pumpkin, numCrops: 0 },
    ];
    expect(getCostsForCrop(crops)).toBe(5);
  });
});

describe("getRevenueForCrop", () => {
  test("Calculate revenue per single crop", () => {
    const corn = {
      name: "corn",
      yield: 3,
      salePrice: 2,
    };
    const crops = [{ crop: corn, numCrops: 5 }];
    expect(getRevenueForCrop(crops)).toBe(10);
  });
  // test("Calculate revenue multiple crops", () => {
  //   const corn = {
  //     name: "corn",
  //     yield: 3,
  //     salePrice: 2,
  //   };
  //   const pumpkin = {
  //     name: "pumpkin",
  //     yield: 4,
  //     salePrice: 3,
  //   };
  //   const crops = [
  //     { crop: corn, numCrops: 5 },
  //     { crop: pumpkin, numCrops: 2 },
  //   ];
  //   expect(getRevenueForCrop(crops)).toBe(16);
  // });
  // test("Calculate revenue with 0 amount crop", () => {
  //   const corn = {
  //     name: "corn",
  //     yield: 3,
  //     salePrice: 2,
  //   };
  //   const pumpkin = {
  //     name: "pumpkin",
  //     yield: 4,
  //     salePrice: 3,
  //   };
  //   const crops = [
  //     { crop: corn, numCrops: 5 },
  //     { crop: pumpkin, numCrops: 0 },
  //   ];
  //   expect(getRevenueForCrop(crops)).toBe(10);
  // });
});
