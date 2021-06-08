/*
A:
Schrijf een JavaScript functie die een bepaald item weet te vinden en terug geeft op basis van een bepaalde value.
Zoek het hele object van Spiderman, gebaseerd op de name "Spiderman". Gebruik .find.
*/

// const superheroes = [
//   { name: "Batman", alter_ego: "Bruce Wayne" },
//   { name: "Superman", alter_ego: "Clark Kent" },
//   { name: "Spiderman", alter_ego: "Peter Parker" },
// ];

// console.log(superheroes.find((e) => e.name === "Spiderman"));
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

/*
B-1:
Zorg dat je een array returned met de integers verdubbeld.
Gebruik de .forEach method
*/

// function doubleArrayValues(array) {
//   array.forEach((element) => {
//     console.log(element * 2);
//   });
// }

// doubleArrayValues([1, 2, 3]);

// doubleArrayValues([1, 2, 3])
// result should be [2, 4, 6]

/*
B-2:
Zorg dat je een array returned met de integers verdubbeld.
Gebruik de .map method.
*/
// const numbers = [1, 2, 3];

// const doubleArrayValues = numbers.map(function (num) {
//   console.log(num * 2);
// });

// doubleArrayValues(numbers);

/*
C:
Schrijf een JavaScript functie die checkt of er een nummer
(integer) in de array aanwezig is dat groter is dan 10.
ik denk dat ik .some methode nodig heb
*/

// const containsNumberBiggerThan10 = function (element, index, array) {
//   return element > 10;
// };

// console.log([1, 4, 3, 6, 9, 7, 11].some(containsNumberBiggerThan10));

// containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11])
// // result should be true
// containsNumberBiggerThan10([1,2,1,2,1,2]})
// // result should be false

/*
D:
Schrijf een JavaScript functie die kijkt of er een bepaalde string:
"Italy" in de array aanwezig is.
*/

// const isItalyInTheGreat7 = function (array) {
//   return array.includes("Italy");
// };

// console.log(
//   isItalyInTheGreat7([
//     "Canada",
//     "France",
//     "Germany",
//     "Italy",
//     "Japan",
//     "United Kingdom",
//     "United States",
//   ])
// );

// isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'])
// // result should be true

/*
E:
 Schrijf een JavaScript functie die elke integer vertienvoudigt.
 Gebruik .forEach.
*/
// array_2 = [];
// const tenfold = function (array) {
//   array.forEach((element) => {
//     array_2.push(element * 10);
//   });
//   console.log(array_2);
// };

// tenfold([1, 4, 3, 6, 9, 7, 11]);
// // result should be [10, 40, 30, 60, 90, 70, 110]

/*
F:
Schrijf een JavaScript functie die checkt of alle waardes in de array
onder de 100 zijn, en true or false retourneert.
*/

// function isBigEnough(element) {
//   return element < 100;
// }

// console.log(
//   [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98].every(isBigEnough)
// );

/*
G - BONUS opdracht:
Schrijf een JavaScript functie die alle waardes in de array bij elkaar optelt
en het totaal van de som retourneert.
Gebruik de .reduce method. En echt, gebruik Google.
*/

// const sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0);
// console.log(sum);

// const bigSum = function (array) {
//   const sum = array.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue;
//   }, 0);
//   return sum;
// };

// console.log(
//   bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234])
// );
