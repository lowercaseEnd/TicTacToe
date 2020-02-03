const finish = require("../main");

test(`[["x", "x", "x"], [null, null, null], [null, null, null]] should be true`, () => {
  expect(finish.isDraw([["x", "x", "x"], [null, null, null], [null, null, null]])).toBe(false);
})
//
// test(`[["x", "o", "x"], ["o", "x", "o"], ["o", "x", "o"]] should be draw`, () => {
//   expect(finish.isDraw([["x", "x", "x"], [null, null, null], [null, null, null]])).toBe(true);
// })