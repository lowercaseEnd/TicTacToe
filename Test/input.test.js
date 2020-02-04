const UserInput = require("../classes/input");

test("Should return false on a non empty cell", () => {
  expect(UserInput.isInputCorrect([1, 1], [["x", "x", "x"], ["x", "x", "x"], ["x", "x", "x"]])).toBe(false);
});
test("Should return true on a null cell", () => {
  expect(UserInput.isInputCorrect([1, 1], [[null, "x", "x"], ["x", "x", "x"], ["x", "x", "x"]])).toBe(true);
});
test("Should return false on a empty input", () => {
  expect(UserInput.isInputCorrect(["", ""], [[null, "x", "x"], ["x", "x", "x"], ["x", "x", "x"]])).toBe(false);
});
test("Should return false when user inputs not a number", () => {
  expect(UserInput.isInputCorrect(["ava", "sdfasf"], [[null, "x", "x"], ["x", "x", "x"], ["x", "x", "x"]])).toBe(false);
});