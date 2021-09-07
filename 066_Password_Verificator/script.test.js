// een werkend test-script om de jest te testen.
test("Joep should be in usernames", () => {
  usernames = ["john", "joep", "admin"];
  expect(usernames).toContain("joep");
});

const functionsScript = require("./script");

// kleine test voor de koppeling
test("Script-file is testing", () => {
  expect(functionsScript.testScriptFunction()).toBe("testing script-file");
});
