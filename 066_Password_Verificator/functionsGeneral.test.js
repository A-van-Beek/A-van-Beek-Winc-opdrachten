//koppeling met script-file
const functionsScript = require("./functionsGeneral");

// kleine test voor de koppeling
test("Console.log vanuit functionsGeneral.js is testing", () => {
  expect(functionsScript.testFunctionScript()).toBe("testing");
});

// __let op__ hier de algemene andere functies,
// die niet te maken hebben met de password verifier.
// echter: geen DOM manipulatie mogelijk, dus nu nog leeg
