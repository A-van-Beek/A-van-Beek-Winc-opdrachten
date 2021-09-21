const corn = {
  name: "corn",
  yield: 3,
  salePrice: 2,
  sowingPrice: 1,
  factors: {
    sun: { low: -50, medium: 0, high: 50 },
    wind: { low: 50, medium: 0, high: -50 },
    rain: { low: -25, medium: 0, high: 30 },
  },
};

const pumpkin = {
  name: "pumpkin",
  yield: 4,
  salePrice: 3,
  sowingPrice: 2,
  factors: {
    sun: { low: -50, medium: 0, high: 50 },
    wind: { low: 50, medium: 0, high: -50 },
    rain: { low: -25, medium: 0, high: 30 },
  },
};

const lettuce = {
  name: "lettuce",
  yield: 2,
  salePrice: 4,
  sowingPrice: 1.5,
  factors: {
    sun: { low: -50, medium: 0, high: 50 },
    wind: { low: 0, medium: 0, high: 0 },
    rain: { low: -25, medium: 0, high: 75 },
  },
};

const apple = {
  name: "apple",
  yield: 50,
  salePrice: 2,
  sowingPrice: 10,
  factors: {
    sun: { low: -50, medium: 0, high: 50 },
    wind: { low: 10, medium: 0, high: -10 },
    rain: { low: -25, medium: 0, high: 75 },
  },
};

const apricot = {
  name: "apricot",
  yield: 20,
  salePrice: 4,
  sowingPrice: 10,
  factors: {
    sun: { low: -50, medium: 0, high: 50 },
    wind: { low: 10, medium: 0, high: -10 },
    rain: { low: -25, medium: 0, high: 75 },
  },
};

const pear = {
  name: "pear",
  yield: 30,
  salePrice: 5,
  sowingPrice: 7,
  factors: {
    sun: { low: -50, medium: 0, high: 50 },
    wind: { low: 10, medium: 0, high: -10 },
    rain: { low: -25, medium: 0, high: 75 },
  },
};

vegetables = {
  corn,
  pumpkin,
  lettuce,
  apple,
  apricot,
  pear,
};

module.exports = vegetables;
