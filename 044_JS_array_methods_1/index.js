/*
A: voeg woord toe aan array
*/

// const addTheWordCool = function (array) {
//   array.push("cool");
//   return array;
// };

// console.log(addTheWordCool(["nice", "awesome", "tof"]));

/*
B: geef het aantal elementen terug
*/

// const amountOfElementsInArray = function (array) {
//   return array.length;
// };

// console.log(amountOfElementsInArray(["appels", "peren", "citroenen"]));

/*
C: geef het eerste element terug
*/

// const amountOfElementsInArray = function (array) {
//   return array[0];
// };

// console.log(amountOfElementsInArray(["Belgie", "Nederland", "Luxemburg"]));

/*
D: geef het laatste element terug
*/

// const amountOfElementsInArray = function (array) {
//   return array[array.length - 1];
// };

// console.log(amountOfElementsInArray(["Haas", "Cavia", "Kip", "Schildpad"]));

/*
E: retour alle elementen, behalve de eerste
via .slice
*/
// const impeachTrumpSlice = function (array) {
//   array_2 = array.slice(1);
//   return array_2;
// };

// console.log(impeachTrumpSlice(["Trump", "Obama", "Bush", "Clinton"]));

/*
E: retour alle elementen, behalve de eerste
via .splice
nb alle elementen vanaf genoemd element worden verwijderd.
het tweede getal geeft aan hoeveel elementen verwijderd moeten worden
*/

// const impeachTrumpSplice = function (array) {
//   array.splice(0, 1);
//   return array;
// };

// console.log(impeachTrumpSplice(["Trump", "Obama", "Bush", "Clinton"]));

/*
F: join elementen in array met spatie
*/
// const stringsTogether = function (array) {
//   array_2 = array.join(" ");
//   return array_2;
// };

// console.log(stringsTogether(["Winc", "Academy", "is", "leuk", ";-}"]));
// //resultaat: "Winc Academy is leuk ;-}"

/*
F: voeg twee array's samen 
*/

const combineArray = function (array, array_2) {
  result = array.concat(array_2);
  return result;
};
console.log(combineArray([1, 2, 3], [4, 5, 6]));
