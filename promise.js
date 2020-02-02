"use strict"

const readline = require("readline");

function test() {
  return fun().then((res) => {
    console.log(res);
    return new Promise(resolve => resolve("test"));
  })
}
function fun() {
  return new Promise((resolve) => {
    resolve("value");
  })
}
function mulProm() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  let t = new Promise(resolve => {
    rl.question("??", (ans) => {
      rl.pause();
      resolve(ans);
    });
  })
  .then(res => {
    return new Promise(resolve => {
      rl.resume();
      rl.question("????", (ans) => {
        rl.close();
        resolve([res, ans]);
      });
    })
  })
  return t;
}
// test().then(res => console.log(res));
// console.log(mulProm());
async function f() {
  await mulProm().then(res => {
    console.log(res);
  })
  console.log("test");
}
// mulProm().then(res => {
//   console.log(res);
// })
// console.log("test");
f();