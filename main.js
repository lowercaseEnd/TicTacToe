//Tic Tac Toe game
"use strict"

const readline =  require("readline");

//init board
function initBoard(row = 3, column = 3) {
  //force board to be square
  if(row !== column) {
    return ;
  }
  let board = [];
  for(let i = 0; i < row; i++) {
    // board[i].push([]);
    board[i] = [];
    for(let j = 0; j < column; j++) {
      board[i][j] = null;
    }
  }
  return board;
}


//read user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log(initBoard());
getInput()
.then((value) => {
  console.log("Row: " + value);
  return new Promise((resolve, reject) => {
    rl.resume();
    rl.question("Enter column: ", (value) => {
      rl.close();
      resolve(value);
  })
})
})
.then((value) => {
  console.log("Column: " + value);
});
function getInput() {
  return new Promise ((resolve, reject) => {
    rl.question("Enter row: ", (value) => {
      rl.pause();
      resolve(value)
    });
  });
}
