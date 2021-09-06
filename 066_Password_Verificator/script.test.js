// een werkend test-script om de jest te testen.
// let op: nog geen koppeling met het script
// arrays
test("Admin should be in usernames", () => {
  usernames = ["john", "sarah", "admin"];
  expect(usernames).toContain("admin");
});

// vanaf hier de opdracht:
//koppeling met script-file
const functions = require("./script");

// kleine test voor de koppeling
test("Console.log is testing", () => {
  expect(functions.testFunction()).toBe("testing");
});

//test voor niet nul
test("de invoer is niet null", () => {
  expect(functions.isNotNull("met input")).toBe(true);
});

test("de invoer is wel null", () => {
  expect(functions.isNotNull()).toBe(false);
});

//test voor lengte
test("wachtwoord is korter dan 9", () => {
  expect(functions.hasRightLength("kort")).toBe(true);
});

test("wachtwoord is langer dan 9", () => {
  expect(functions.hasRightLength("telangwachtwoord")).toBe(false);
});

//test voor upper case karakters
test("wachtwoord heeft upper case karacter", () => {
  expect(functions.hasUpperCaseCharacter("koRt")).toBe(true);
});

test("wachtwoord heeft geen upper case karacter", () => {
  expect(functions.hasUpperCaseCharacter("kort")).toBe(false);
});

//test voor lower case karakters
test("wachtwoord heeft lower case karacter", () => {
  expect(functions.hasLowerCaseCharacter("kort")).toBe(true);
});

test("wachtwoord heeft geen lower case karacter", () => {
  expect(functions.hasLowerCaseCharacter("KORT")).toBe(false);
});

//test voor aanwezigheid cijfers
test("wachtwoord heeft numeriek teken", () => {
  expect(functions.hasDigit("kor3t")).toBe(true);
});

test("wachtwoord heeft geen numeriek teken", () => {
  expect(functions.hasDigit("kort")).toBe(false);
});

// check minimum conditions behaald
test("minimaal aantal conditions behaald", () => {
  expect(
    functions.minimumConditionsReached([true, false, true, false, true])
  ).toBe(true);
});

// test eindcontrole wachtwoord
test("wachtwoord goedgekeurd", () => {
  expect(functions.verifyPassword("Goed4")).toBe(true);
});
