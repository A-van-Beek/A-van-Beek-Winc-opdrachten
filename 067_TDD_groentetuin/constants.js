const corn = {
  name: "corn",
  yield: 3,
  salePrice: 2,
  sowingPrice: 1,
  factors: { sun: { low: -50, medium: 0, high: 50 } },
};

const pumpkin = {
  name: "pumpkin",
  yield: 4,
  salePrice: 3,
  sowingPrice: 2,
  factors: { sun: { low: -25, medium: 0, high: 25 } },
};

const lettuce = {
  name: "lettuce",
  yield: 2,
  salePrice: 4,
  sowingPrice: 1.5,
  factors: { sun: { low: 10, medium: 0, high: 60 } },
};

vegetables = {
  corn,
  pumpkin,
  lettuce,
};

module.exports = vegetables;
