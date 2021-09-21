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
      sun: "medium",
      wind: "medium",
      rain: "medium",
    };
    expect(farmFunctions.getYieldForCrop(crops)).toBe(6.0);
  });
  test("Get yield for crop, 1 environmental factor", () => {
    const crops = {
      crop: vegetables.corn,
      numCrops: 2,
      sun: "low",
      wind: "medium",
      rain: "medium",
    };
    expect(farmFunctions.getYieldForCrop(crops)).toBe(3.0);
  });
  test("Get yield for crop, 1 environmental factor medium", () => {
    const crops = {
      crop: vegetables.corn,
      numCrops: 2,
      sun: "medium",
      wind: "medium",
      rain: "medium",
    };
    expect(farmFunctions.getYieldForCrop(crops)).toBe(6.0);
  });
  test("Get yield for crop, multiple environmental factors", () => {
    const crops = {
      crop: vegetables.corn,
      numCrops: 2,
      sun: "high",
      wind: "low",
      rain: "high",
    };
    expect(farmFunctions.getYieldForCrop(crops)).toBe(17.55);
  });
});

describe("getTotalYield", () => {
  test("Calculate total yield with multiple crops", () => {
    const crops = [
      {
        crop: vegetables.corn,
        numCrops: 5,
        sun: "medium",
        wind: "medium",
        rain: "medium",
      },
      {
        crop: vegetables.pumpkin,
        numCrops: 2,
        sun: "medium",
        wind: "medium",
        rain: "medium",
      },
    ];
    expect(farmFunctions.getTotalYield(crops)).toBe(23.0);
  });

  test("Calculate total yield with 0 amount", () => {
    const crops = [
      {
        crop: vegetables.corn,
        numCrops: 0,
        sun: "medium",
        wind: "medium",
        rain: "medium",
      },
    ];
    expect(farmFunctions.getTotalYield(crops)).toBe(0.0);
  });

  test("Calculate total yield with multiple crops, including 1 environmental factor", () => {
    const crops = [
      {
        crop: vegetables.corn,
        numCrops: 5,
        sun: "high",
        wind: "medium",
        rain: "medium",
      },
      {
        crop: vegetables.pumpkin,
        numCrops: 2,
        sun: "medium",
        wind: "medium",
        rain: "medium",
      },
    ];
    expect(farmFunctions.getTotalYield(crops)).toBe(30.5);
  });
});

describe("getCostsForCrop", () => {
  test("Calculate cost per crop", () => {
    const crops = [
      {
        crop: vegetables.corn,
        numCrops: 5,
        sun: "medium",
        wind: "medium",
        rain: "medium",
      },
    ]; //5*1=5
    expect(farmFunctions.getCostsForCrop(crops)).toBe(5.0);
  });
  test("Calculate cost multiple crops", () => {
    const crops = [
      {
        crop: vegetables.corn,
        numCrops: 5,
        sun: "medium",
        wind: "medium",
        rain: "medium",
      }, // 5*1=5
      {
        crop: vegetables.pumpkin,
        numCrops: 2,
        sun: "medium",
        wind: "medium",
        rain: "medium",
      }, //2*2=4
    ];
    expect(farmFunctions.getCostsForCrop(crops)).toBe(9.0);
  });
  test("Calculate total costs with 0 amount", () => {
    const crops = [
      {
        crop: vegetables.corn,
        numCrops: 5,
        sun: "medium",
        wind: "medium",
        rain: "medium",
      }, // 5*1=5
      {
        crop: vegetables.pumpkin,
        numCrops: 0,
        sun: "medium",
        wind: "medium",
        rain: "medium",
      },
    ];
    expect(farmFunctions.getCostsForCrop(crops)).toBe(5.0);
  });
});

describe("getRevenueForCrop", () => {
  //to recieve by selling
  test("Calculate revenue per single crop", () => {
    const crops = [
      {
        crop: vegetables.corn,
        numCrops: 5,
        sun: "medium",
        wind: "medium",
        rain: "medium",
      },
    ];
    expect(farmFunctions.getRevenueForCrop(crops)).toBe(30.0);
  });
  test("Calculate revenue multiple crops", () => {
    const crops = [
      {
        crop: vegetables.corn,
        numCrops: 5,
        sun: "medium",
        wind: "medium",
        rain: "medium",
      }, // 30
      {
        crop: vegetables.pumpkin,
        numCrops: 2,
        sun: "medium",
        wind: "medium",
        rain: "medium",
      }, // 24
    ];
    expect(farmFunctions.getRevenueForCrop(crops)).toBe(54.0);
  });
  test("Calculate revenue with 0 amount crop", () => {
    const crops = [
      {
        crop: vegetables.corn,
        numCrops: 5,
        sun: "medium",
        wind: "medium",
        rain: "medium",
      }, // 30
      {
        crop: vegetables.pumpkin,
        numCrops: 0,
        sun: "medium",
        wind: "medium",
        rain: "medium",
      }, // 0
    ];
    expect(farmFunctions.getRevenueForCrop(crops)).toBe(30.0);
  });
  test("Calculate revenue with crop and 1 environmental factor", () => {
    const crops = [
      {
        crop: vegetables.corn,
        numCrops: 6,
        sun: "low",
        wind: "medium",
        rain: "medium",
      }, //18
      {
        crop: vegetables.pumpkin,
        numCrops: 0,
        sun: "medium",
        wind: "medium",
        rain: "medium",
      }, //0
    ];
    expect(farmFunctions.getRevenueForCrop(crops)).toBe(18.0);
  });
});

describe("getProfitForCrop", () => {
  test("Calculate profit per single crop", () => {
    const crops = [
      {
        crop: vegetables.corn,
        numCrops: 5,
        sun: "medium",
        wind: "medium",
        rain: "medium",
      },
    ]; //30-5 = 25
    expect(farmFunctions.getProfitForCrop(crops)).toBe(25.0);
  });
  test("Calculate profit multiple crops", () => {
    const crops = [
      {
        crop: vegetables.corn,
        numCrops: 2,
        sun: "medium",
        wind: "medium",
        rain: "medium",
      }, //12-2=10
      {
        crop: vegetables.pumpkin,
        numCrops: 5,
        sun: "medium",
        wind: "medium",
        rain: "medium",
      }, //60-10=50
    ];
    expect(farmFunctions.getProfitForCrop(crops)).toBe(60.0);
  });
  test("Calculate profits with 0 amount crop", () => {
    const crops = [
      {
        crop: vegetables.corn,
        numCrops: 2,
        sun: "medium",
        wind: "medium",
        rain: "medium",
      }, //12-2=10
      {
        crop: vegetables.pumpkin,
        numCrops: 5,
        sun: "medium",
        wind: "medium",
        rain: "medium",
      }, //60-10=50
      {
        crop: vegetables.lettuce,
        numCrops: 0,
        sun: "medium",
        wind: "medium",
        rain: "medium",
      }, //0
    ];
    expect(farmFunctions.getProfitForCrop(crops)).toBe(60.0);
  });
  test("Calculate profits with environmental factors", () => {
    const crops = [
      {
        crop: vegetables.corn,
        numCrops: 2,
        sun: "high",
        wind: "medium",
        rain: "medium",
      }, //18-2=16
      {
        crop: vegetables.pumpkin,
        numCrops: 5,
        sun: "medium",
        wind: "medium",
        rain: "medium",
      }, //60-10=50
      {
        crop: vegetables.lettuce,
        numCrops: 0,
        sun: "medium",
        wind: "medium",
        rain: "medium",
      }, //0
    ];
    expect(farmFunctions.getProfitForCrop(crops)).toBe(66.0);
  });
});
