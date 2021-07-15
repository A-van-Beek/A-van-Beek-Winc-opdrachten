// ✅ Exercise 1:
// const inputNr = 12;

// const isGreater10 = new Promise((resolve, reject) => {
//   if (inputNr > 10) {
//     //als getal groter is dan 10 is true
//     const goedgekeurd = "Yes, het getal is groter dan 10 !";
//     resolve(goedgekeurd);
//   } else {
//     //als sinterklaasIsGul is false
//     const afgekeurd = new Error("Het getal is kleiner of gelijk aan 10");
//     reject(afgekeurd);
//   }
// });

// // Promise aanroepen, of "consumeren" (dit zullen je dus wel doen en moeten leren)
// const vraagGroterDan10 = () => {
//   isGreater10
//     .then(function (resolved) {
//       console.log(resolved);
//     })
//     .catch(function (error) {
//       console.log(error.message);
//     });
// };

// vraagGroterDan10();

// // ✅ Exercise 2

const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const outputArray = [];

function step1() {
  arrayOfWords.forEach(makeAllCaps);
  console.log(outputArray);
  outputArray.sort();
  console.log(outputArray);
}

function makeAllCaps(item) {
  const letters = /^[A-Za-z]+$/;
  if (typeof item === "string") {
    if (item.match(letters)) {
      outputArray.push(item.toUpperCase());
    } else {
      outputArray.push(item);
    }
  } else {
    outputArray.push(item);
  }
}

step1();
