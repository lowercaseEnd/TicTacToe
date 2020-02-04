const board = require("../classes/board");

test("Board should init cells with nulls", () => {
  let test = new board();
  expect(test.initBoard()).toEqual([[null, null, null], [null, null, null], [null, null, null]]);
})

// const finish = require("../main");

// test(`[["x", "x", "x"], [null, null, null], [null, null, null]] should be true`, () => {
//   expect(finish.isGameFinished([["x", "x", "x"], [null, null, null], [null, null, null]])).toBe(true);
// })
// test(`[[null, null, null], ["x", "x", "x"], [null, null, null]] should be true`, () => {
//   expect(finish.isGameFinished([[null, null, null], ["x", "x", "x"], [null, null, null]])).toBe(true);
// })
// test(`[[null, null, null], [null, null, null],["x", "x", "x"]] should be true`, () => {
//   expect(finish.isGameFinished([[null, null, null], [null, null, null],["x", "x", "x"]])).toBe(true);
// })
// test(`[["x", null, null], ["x", null, null],["x", null, "x"]] should be true`, () => {
//   expect(finish.isGameFinished([["x", null, null], ["x", null, null],["x", null, "x"]])).toBe(true);
// })
//
// test(`[["x", "o", "x"], ["o", "x", "o"], ["o", "x", "o"]] should be draw`, () => {
//   expect(finish.isDraw([["x", "x", "x"], [null, null, null], [null, null, null]])).toBe(true);
// })