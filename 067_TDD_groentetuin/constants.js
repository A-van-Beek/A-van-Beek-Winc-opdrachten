const corn = {
  name: "corn",
  yield: 3,
  salePrice: 2,
  factors: { sun: { low: -50, medium: 0, high: 50 } },
};

const pumpkin = {
  name: "pumpkin",
  yield: 4,
  salePrice: 3,
  factors: { sun: { low: -50, medium: 0, high: 50 } },
};

const lettuce = {
  name: "lettuce",
  yield: 2,
  salePrice: 4,
  factors: { sun: { low: -50, medium: 0, high: 50 } },
};

vegetables = {
  corn,
  pumpkin,
  lettuce,
};

module.exports = vegetables;
