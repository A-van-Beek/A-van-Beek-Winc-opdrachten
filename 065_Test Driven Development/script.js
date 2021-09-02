const functions = {
  add: (num1, num2) => {
    outputAdd = num1 + num2;
    console.log(`uitslag simpele add: ${outputAdd}`);

    return outputAdd;
  },
  addOne: (myArray) => {
    const output = [];
    myArray.forEach((i) => {
      output.push(i + 1);
    });
    console.log(`uitslag addOne: ${output}`);
    return output;
  },
  getWordLengths: (words) => {
    const output = [];
    words.forEach((i) => {
      output.push(i.length);
    });
    console.log(`uitslag getWordLengths: ${output}`);
    return output;
  },
};

functions.add(2, 3);
functions.addOne([33, 58, 13, 6]);
functions.getWordLengths(["sun", "potato"]);

module.exports = functions;
