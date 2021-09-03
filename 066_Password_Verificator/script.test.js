// een werkend test-script om de jest te testen.
// let op: nog geen koppeling met het script
// arrays
test("Admin should be in usernames", () => {
  usernames = ["john", "sarah", "admin"];
  expect(usernames).toContain("admin");
});

// vanaf hier de opdracht:
//koppeling met script-file
//   const functions = require("./script");
