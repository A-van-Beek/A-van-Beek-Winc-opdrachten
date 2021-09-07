console.log("welkom bij console log");

document.getElementById("submit").addEventListener("click", checkPassword);

function checkPassword() {
  console.log("deleting input");
  console.log("checking password");
  const requestedPassword = (document.getElementById("password").value = "");
  const checkedPassword = verifyPassword(requestedPassword);
  if (checkedPassword === true) {
    alert(`Password: ${requestedPassword} is oké`);
  } else {
    alert(`Password: ${requestedPassword} is not correct`);
  }
}

// test functie (AvB)
const testScriptFunction = () => {
  return "testing script-file";
};

functionsScript = {
  checkPassword,
  testScriptFunction,
};

module.exports = functionsScript;
