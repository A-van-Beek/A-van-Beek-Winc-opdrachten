// een werkend test-script om de jest te testen
// arrays
test("Admin should be in usernames", () => {
  usernames = ["john", "sarah", "admin"];
  expect(usernames).toContain("admin");
});

// const addOne = require("./add-one.js");

// test("Add 1 to each item in myArray", function () {
//   const myArray = [31, 57, 12, 5];

//   const unchanged = [31, 57, 12, 5];
//   const expected = [32, 58, 13, 6];
//   const output = addOne(myArray);

//   expect(output).toEqual(expected);
//   expect(myArray).toEqual(unchanged);
// });
