//koppeling met script-file
const functionsScript = require("./script");

// kleine test voor de koppeling
test("Console.log vanuit script.js is testing", () => {
  expect(functionsScript.testFunctionScript()).toBe("testing");
});
