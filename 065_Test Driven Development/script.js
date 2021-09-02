const functions = {
  add: (num1, num2) => num1 + num2,
  addOne: () => {
    const myArray = [31, 57, 12, 5];
    const output = [];
    myArray.forEach((i) => {
      newNumber = i + 1;
      output.push(newNumber);
    });
    return output;
  },
};
// functions.addOne();

module.exports = functions;
