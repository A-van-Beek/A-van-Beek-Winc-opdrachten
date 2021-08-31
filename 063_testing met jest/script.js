const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  isUndefined: () => undefined,
  checkValue: (x) => x,
  createUser: () => {
    const user = { firstName: "Brad" };
    user["lastName"] = "Traversy";
    return user;
  },
};

module.exports = functions;
