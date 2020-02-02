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
let board = initBoard();
getInput()
.then((row) => {
  // console.log("Row: " + row);
  return new Promise((resolve) => {
    rl.resume();
    rl.question("Enter column: ", (column) => {
      rl.close();
      resolve([row, column]);
  })
})
})
.then((value) => {
  // console.log("Column: " + value);
  // console.log(value);
  console.log(isInputCorrect(value, board));
  printBoard([["x", "o", null], [null, "o", null], ["x", null, null]]);
});
//user will input numbers from 1 instead of 0
function getInput() {
  return new Promise ((resolve) => {
    rl.question("Enter row: ", (row) => {
      rl.pause();
      resolve(row)
    });
  });
}

//check for end of the game
function isGameFinished() {

}

//validate user input
function isInputCorrect(userInput, board){
  //check for valid number
  let numberRow = +userInput[0];
  let numberColumn = +userInput[1];
  if(isNaN(numberColumn) || isNaN(numberRow)) {
    return false;
  }
  //check if numbers are in range
  if(numberRow - 1 >= board.length || numberColumn - 1 >= board[0].length) {
    return false;
  }

  return true;
}

//pretty print board
function printBoard(board) {
  //using string concat because console.log always puts a \n
  let prettyPrint = "";
  for(let i = 0; i < board.length; i++) {
    prettyPrint += `\t${i}\t`;
    if(board.length - i !== 1) {
      prettyPrint += "|";
    }
  }
  prettyPrint += "\n";
  for(let i = 0; i < board.length; i++) {
    prettyPrint += "-".repeat(17);
  }
  prettyPrint += "\n";
  for(let i = 0; i < board.length; i++) {
    prettyPrint += `${i}|`;
    for(let j = 0; j < board[i].length; j++) {
      let value = board[i][j] === null ? "\t\t|" : `\t${board[i][j]}\t|`;
      prettyPrint += value;
    }
    prettyPrint += "\n";
    for(let j = 0; j < board.length; j++) {
      prettyPrint += "-".repeat(17);
    }
    prettyPrint += "\n";
  }
  console.log(prettyPrint);
}