// een werkend test-script om de jest te testen.
// let op: nog geen koppeling met het script
// arrays
test("Admin should be in usernames", () => {
  usernames = ["john", "sarah", "admin"];
  expect(usernames).toContain("admin");
});

//koppeling met script-file
const functions = require("./script");

test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

// vanaf hier de opdracht:

test("Add 1 to each item in myArray", function () {
  const myArray = [31, 57, 12, 5];

  const unchanged = [31, 57, 12, 5];
  const expected = [32, 58, 13, 6];
  const output = functions.addOne();

  expect(output).toEqual(expected);
  expect(myArray).toEqual(unchanged);
});
