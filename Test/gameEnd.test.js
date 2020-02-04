const GameEnd = require("../classes/gameEnd");

test("Should return false on non complete column", () => {
  expect(GameEnd.isGameFinished([["x", null, null], [null, null, null], ["x", null, null]])).toBe(false);
});
test("Should return false on non complete column", () => {
  expect(GameEnd.isGameFinished([[null, null, "x"], [null, null, null], [null, null, "x"]])).toBe(false);
});

test("Should return false on non complete row", () => {
  expect(GameEnd.isGameFinished([["x", null, "x"], [null, null, null], [null, null, null]])).toBe(false);
});
test("Should return false on non complete row", () => {
  expect(GameEnd.isGameFinished([[null, null, null], [null, null, null], ["x", null, "x"]])).toBe(false);
});

test("Should return false on non complete main diagonal", () => {
  expect(GameEnd.isGameFinished([["x", null, null], [null, "x", null], [null, null, null]])).toBe(false);
});
test("Should return false on non complete secondary diagonal", () => {
  expect(GameEnd.isGameFinished([[null, null, "x"], [null, "x", null], [null, null, null]])).toBe(false);
});

test("Should return true on a complete column", () => {
  expect(GameEnd.isGameFinished([["x", null, null], ["x", null, null], ["x", null, null]])).toBe(true);
});

test("Should return true on a complete row", () => {
  expect(GameEnd.isGameFinished([["x", "x", "x"], [null, null, null], [null, null, null]])).toBe(true);
});

test("Should return true on a complete main diagonal", () => {
  expect(GameEnd.isGameFinished([["x", null, null], [null, "x", null], [null, null, "x"]])).toBe(true);
});
test("Should return true on a complete secondary diagonal", () => {
  expect(GameEnd.isGameFinished([[null, null, "x"], [null, "x", null], ["x", null, null]])).toBe(true);
});

test("Should return true on a full board", () => {
  expect(GameEnd.isDraw([["x", "x", "x"], ["x", "x", "x"], ["x", "x", "x"]])).toBe(true);
});
test("Should return false on non full board", () => {
  expect(GameEnd.isDraw([[null, "x", "x"], ["x", null, "x"], ["x", "x", null]])).toBe(false);
});
test("Should return false on non full board", () => {
  expect(GameEnd.isDraw([["x", "x", "x"], ["x", null, "x"], ["x", "x", "x"]])).toBe(false);
});