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
getInput();
function getInput() {
  rl.question("?", () => {
    console.log("YES");
    rl.close();
  });
}
console.log(initBoard());