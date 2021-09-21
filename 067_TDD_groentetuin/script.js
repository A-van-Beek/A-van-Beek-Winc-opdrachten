// var crops = [];

const crops = [
  {
    crop: vegetables.corn,
    numCrops: 3,
    sun: "low",
    wind: "medium",
    rain: "high",
  },
];

// getYieldForCrop({
//   crop: vegetables.corn,
//   numCrops: 2,
//   sun: "high",
//   wind: "low",
//   rain: "high",
// });

document
  .getElementById("submitCrops")
  .addEventListener("mouseover", function () {
    const addCrop = document.getElementById("crop").value;
    const addNumCrops = document.getElementById("numCrops").value;
    const addSun = document.getElementById("sun").value;
    const addWind = document.getElementById("wind").value;
    const addRain = document.getElementById("rain").value;
    const newCrop = {
      crop: addCrop,
      numCrops: addNumCrops,
      sun: addSun,
      wind: addWind,
      rain: addRain,
    };
    crops.push(newCrop);
    resetInput();
    return crops;
  });

function resetInput() {
  document.getElementById("crop").value = "default";
  document.getElementById("numCrops").value = 0;
  document.getElementById("sun").value = "medium";
  document.getElementById("wind").value = "medium";
  document.getElementById("rain").value = "medium";
}

document
  .getElementById("showPurchasedCrops")
  .addEventListener("mouseover", function () {
    console.log(crops);
  });

document
  .getElementById("calculateProfit")
  .addEventListener("click", function () {
    console.log("calculating your profit");
    getProfitForCrop(crops);
  });

document.getElementById("reset").addEventListener("click", function () {
  console.log(crops);
  crops = [];
  console.log(crops);
});

// const crops = [
//   {
//     crop: vegetables.corn,
//     numCrops: 3,
//     sun: "low",
//     wind: "low",
//     rain: "high",
//   },
//   {
//     crop: vegetables.pumpkin,
//     numCrops: 5,
//     sun: "low",
//     wind: "medium",
//     rain: "high",
//   },
// ];

// const input = {
//   crop: vegetables.corn,
//   numCrops: 2,
//   sun: "high",
//   wind: "low",
//   rain: "high",
// };

// getYieldForPlant(corn);
// getYieldForCrop(input);
// getTotalYield(crops);
// getCostsForCrop(crops);
// getRevenueForCrop(crops);
// getProfitForCrop(crops);
