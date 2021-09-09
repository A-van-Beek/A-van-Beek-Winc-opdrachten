// Utility functions
const isNotNull = (requestedPassword) => {
  return requestedPassword != null;
};

const hasRightLength = (requestedPassword) => {
  if (requestedPassword.length <= 9) {
    console.log(requestedPassword);
    // console.log("korter dan 9");
    return true;
  } else {
    // console.log("langer dan 9");
    return false;
  }
};

const hasUpperCaseCharacter = (requestedPassword) => {
  // console.log(requestedPassword.toLowerCase());
  // console.log(requestedPassword !== requestedPassword.toLowerCase());
  return requestedPassword !== requestedPassword.toLowerCase();
};

const hasLowerCaseCharacter = (requestedPassword) => {
  // console.log(requestedPassword.toUpperCase());
  // console.log(requestedPassword !== requestedPassword.toUpperCase());
  return requestedPassword !== requestedPassword.toUpperCase();
};

const hasDigit = (requestedPassword) => {
  return /\d/.test(requestedPassword);
};

const minimumConditionsReached = (conditions) => {
  // conditions is an array of booleans
  trueConditions = conditions.filter((bool) => bool);
  // console.log(trueConditions);
  // console.log(trueConditions.length >= 3);
  return trueConditions.length >= 3;
};

// "Outer" function
const verifyPassword = (requestedPassword) => {
  const conditions = [
    isNotNull(requestedPassword),
    hasRightLength(requestedPassword),
    hasUpperCaseCharacter(requestedPassword),
    hasLowerCaseCharacter(requestedPassword),
    hasDigit(requestedPassword),
  ];
  const result =
    minimumConditionsReached(conditions) &&
    hasLowerCaseCharacter(requestedPassword);
  // console.log(conditions);
  console.log(`conclusie eindcontrole: ${result}`);
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
