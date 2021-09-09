//koppeling met script-file
const functionsScript = require("./functionsGeneral");

// kleine test voor de koppeling
test("Console.log vanuit functionsGeneral.js is testing", () => {
  expect(functionsScript.testFunctionScript()).toBe("testing");
});
