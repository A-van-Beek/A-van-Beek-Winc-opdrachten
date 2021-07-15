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

// mijn oplossing is niet helemaal goed, ik heb geen promises gebruikt.
// dit had het ongeveer moeten zijn:
const makeAllCaps = (words) => {
  return new Promise((resolve, reject) => {
    if (
      words.every((word) => {
        return typeof word === "string";
      })
    ) {
      resolve(
        words.map((word) => {
          return word.toUpperCase();
        })
      );
    } else {
      reject("Expected array of strings");
    }
  });
};

const sortWords = (words) => {
  return new Promise((resolve, reject) => {
    if (words) {
      resolve(words.sort());
    } else {
      reject("Expected array of strings");
    }
  });
};

const arrayOfWords = ["cucumber", "tomato", "zucchini", "avocado", "orange"];
const complicatedArray = ["cucumber", 44, true];

// call both functions, chain them together and log the result to the console
makeAllCaps(arrayOfWords)
  .then((capitalizedWords) => sortWords(capitalizedWords))
  .then((sortedWords) => console.log(sortedWords))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then((capitalizedWords) => sortWords(capitalizedWords))
  .then((sortedWords) => console.log(sortedWords))
  .catch((error) => console.log(error));
