const GameEnd = require("../gameEnd");

test("Should return false on non complete column", () => {
  expect(GameEnd.isGameFinished([["x", null, null], [null, null, null], ["x", null, null]])).toBe(false);
});
test("Should return false on non complete column", () => {
  expect(GameEnd.isGameFinished([[null, null, "x"], [null, null, null], [null, null, "x"]])).toBe(false);
});
test("Should return false on non complete column", () => {
  expect(GameEnd.isGameFinished([[null, null, "x"], [null, null, "x"], [null, null, null]])).toBe(false);
});
test("Should return false on non complete row", () => {
  expect(GameEnd.isGameFinished([["x", null, "x"], [null, null, null], [null, null, null]])).toBe(false);
});
test("Should return false on non complete row", () => {
  expect(GameEnd.isGameFinished([[null, null, null], [null, null, null], ["x", null, "x"]])).toBe(false);
});
test("Should return false on non complete diagonal", () => {
  expect(GameEnd.isGameFinished([["x", null, null], [null, "x", null], [null, null, null]])).toBe(false);
});
test("Should return false on non complete diagonal", () => {
  expect(GameEnd.isGameFinished([[null, null, "x"], [null, "x", null], [null, null, null]])).toBe(false);
});