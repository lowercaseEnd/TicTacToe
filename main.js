//Tic Tac Toe game
"use strict";

const readline = require("readline");

//variable to track current move, starts with x.
let move = "x";
playGame();
async function playGame() {
  while (true) {
    let board = initBoard();
    let userInput;
    await getCoordinates().then(res => userInput = res);
    if(isInputCorrect(userInput, board)) {
      continue;
    } else {
      break;
    }
  }
  console.log("Test");
}

//init board
function initBoard(row = 3, column = 3) {
  //force board to be a square
  if (row !== column) {
    return;
  }
  let board = [];
  for (let i = 0; i < row; i++) {
    board[i] = [];
    for (let j = 0; j < column; j++) {
      board[i][j] = null;
    }
  }
  return board;
}

//read user input

//user entered numbers should be on 1 greater than array indexes
function getCoordinates() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  let coords = new Promise(resolve => {
    rl.question("Enter row: ", row => {
      rl.pause();
      resolve(row);
    });
  })
  .then(row => {
      return new Promise(resolve => {
        rl.resume();
        rl.question("Enter column: ", column => {
          rl.close();
          resolve([row, column]);
        });
      });
    });
    return coords;
}
//validate user input
function isInputCorrect(userInput, board) {
  //check for valid number
  let numberRow = +userInput[0];
  let numberColumn = +userInput[1];
  if (isNaN(numberColumn) || isNaN(numberRow)) {
    return false;
  }
  //check if numbers are in range
  if (numberRow - 1 >= board.length || numberColumn - 1 >= board[0].length) {
    return false;
  }
  //check if cell is empty
  if (board[numberRow - 1][numberColumn - 1]) {
    return false;
  }

  return true;
}
//make a move
function makeMove(move, board) {
  let tempBoard = board;
  tempBoard[move[0]][move[1]] = move;
  //change move
  move = move === "x" ? "o" : "x";
  return board;
}

//check for end of the game
function isGameFinished() {}

//pretty print board
function printBoard(board) {
  //using string concat because console.log always puts a \n
  let prettyPrint = "";
  for (let i = 0; i < board.length; i++) {
    prettyPrint += `\t${i + 1}\t`;
    if (board.length - i !== 1) {
      prettyPrint += "|";
    }
  }
  prettyPrint += "\n";
  for (let i = 0; i < board.length; i++) {
    prettyPrint += "-".repeat(17);
  }
  prettyPrint += "\n";
  for (let i = 0; i < board.length; i++) {
    prettyPrint += `${i + 1}|`;
    for (let j = 0; j < board[i].length; j++) {
      let value = board[i][j] === null ? "\t\t|" : `\t${board[i][j]}\t|`;
      prettyPrint += value;
    }
    prettyPrint += "\n";
    for (let j = 0; j < board.length; j++) {
      prettyPrint += "-".repeat(17);
    }
    prettyPrint += "\n";
  }
  console.log(prettyPrint);
}
