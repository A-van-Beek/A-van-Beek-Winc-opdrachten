// Utility functions
const isNotNull = (str) => {
  return str != null;
};

const hasRightLength = (str) => {
  if (str.length <= 9) {
    // console.log("korter dan 9");
    return true;
  } else {
    // console.log("langer dan 9");
    return false;
  }
};

const hasUpperCaseCharacter = (str) => {
  console.log(str.toLowerCase());
  console.log(str !== str.toLowerCase());
  return str !== str.toLowerCase();
};

const hasLowerCaseCharacter = (str) => {
  // console.log(str.toUpperCase());
  // console.log(str !== str.toUpperCase());
  return str !== str.toUpperCase();
};

const hasDigit = (str) => {
  return /\d/.test(str);
};

const minimumConditionsReached = (conditions) => {
  // conditions is an array of booleans
  trueConditions = conditions.filter((bool) => bool);
  // console.log(trueConditions);
  // console.log(trueConditions.length >= 3);
  return trueConditions.length >= 3;
};

// "Outer" function
const verifyPassword = (password) => {
  const conditions = [
    isNotNull(password),
    hasRightLength(password),
    hasUpperCaseCharacter(password),
    hasLowerCaseCharacter(password),
    hasDigit(password),
  ];
  const result =
    minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);
  // console.log(conditions);
  // console.log(result);
  return result;
};

// test functie (AvB)
const testFunction = () => {
  // console.log("testing");
  return "testing";
};

functions = {
  verifyPassword,
  hasRightLength,
  isNotNull,
  hasUpperCaseCharacter,
  hasLowerCaseCharacter,
  hasDigit,
  minimumConditionsReached,
  testFunction,
};

module.exports = functions;
