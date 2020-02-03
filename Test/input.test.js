const UserInput = require("../input");

test("Should return false on a non empty cell", () => {
  expect(UserInput.isInputCorrect([1, 1], [["x", "x", "x"], ["x", "x", "x"], ["x", "x", "x"]])).toBe(false);
});
test("Should return true on a null cell", () => {
  expect(UserInput.isInputCorrect([1, 1], [[null, "x", "x"], ["x", "x", "x"], ["x", "x", "x"]])).toBe(true);
});