function checkPassword(requestedPassword) {
  // console.log("checking password");
  const checkedPassword = verifyPassword(requestedPassword);
  if (checkedPassword === true) {
    alert(`Password: ${requestedPassword} is goedgekeurd`);
  } else {
    alert(`Password: ${requestedPassword} is not correct`);
  }
}

// test functie (AvB)
const testFunctionScript = () => {
  return "testing";
};

functionsScript = {
  checkPassword,
  testFunctionScript,
};

// module.exports = functionsScript;
