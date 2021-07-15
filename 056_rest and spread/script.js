// rest-operator
// function sum(...numbers) {
//   return numbers.reduce(function (prev, current) {
//     return prev + current;
//   });
// }
//kort geschreven:
function sum(...numbers) {
  return numbers.reduce((prev, current) => prev + current);
}

// console.log(sum(1, 2, 3, 4, 5, 6));

//spreat-operator:
function sum2(x, y) {
  return x + y;
}

const nums = [1, 8];

// console.log(sum2(...nums));

//oefening 1
function sum(...numbers) {
  return numbers.reduce((prev, current) => prev + current);
}

console.log(sum(1, 2, 3, 4, 5, 6));

//oefening 2
const optellen = function (...cijfers) {
  return cijfers.reduce((prev, current) => prev + current);
};

const cijfers = [1, 2, 3, 5];

console.log(optellen(...cijfers));
// verwachte uitkomst: 6
