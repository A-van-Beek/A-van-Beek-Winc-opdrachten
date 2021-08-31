//Bestand functions.test.js:
const { expect } = require("@jest/globals");
const { checkValue } = require("./functions.js");
const functions = require("./functions.js");

test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("checkValue Should be falsy when argument is undefined", () => {
  expect(functions.checkValue()).toBeUndefined();
});

test("User should be Brad Traversy object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Brad",
    lastName: "Traversy",
  });
});

// Tests zijn eigenlijk gewoon functies. Om dat te laten zien laten we je
// nu tests maken die werken zonder input van buitenaf:

// Less than or greater than
test("Should be under or equal to 1600", () => {
  const load1 = 800;
  const load2 = 600;
  expect(load1 + load2).toBeLessThan(1600);
});

// Regex
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/);
  // let op: hoofdlettergevoelig ! Om ongevoelig te maken: /I/i
});

// Arrays
test("Admin should be in usernames", () => {
  usernames = ["john", "sarah", "admin"];
  expect(usernames).toContain("admin");
});
