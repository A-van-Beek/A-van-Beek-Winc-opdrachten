const functions = require("./script");

test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// check for truthy & falsy values
// - toBeUndefined
// - toBeTruthy
// - toBeFalsy

// toBeNull
test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

// toBeUndefined
test("Should be undefined", () => {
  expect(functions.isUndefined()).toBeUndefined();
});

// toBeFalsy
test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

// .toBe is te strict, deze gebruik je vooral voor eenvoudige gegevenstypes (getallen)
// .toEqual is wat ruimer, goed voor reference types als arrays en objects.
test("User should be Brad Traversy object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Brad",
    lastName: "Traversy",
  });
});

// toBeLessThan / toBeLessThanOrEqual / toBeGreaterThan
test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 600;
  expect(load1 + load2).toBeLessThan(1600);
});

// regular expression
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/);
  // let op: hoofdlettergevoelig ! Om ongevoelig te maken: /I/i
});

// arrays
test("Admin should be in usernames", () => {
  usernames = ["john", "sarah", "admin"];
  expect(usernames).toContain("admin");
});
