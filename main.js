//Tic Tac Toe game
"use strict";

const readline = require("readline");
//exports for testing
let exp = (module.exports = {});

//variable to track current move, starts with x.
let move = "x";
playGame();
async function playGame() {
  let board = initBoard();
  while (true) {
    printBoard(board);
    let userInput;
    await getCoordinates().then(res => (userInput = res));
    if (isInputCorrect(userInput, board)) {
      board = makeMove(userInput, board);
    } else {
      console.log("You've entered wrong values.");
      continue;
    }
    printBoard(board);
    if (isGameFinished(board)) {
      console.log(`Player ${move} has won.`);
      break;
    }
    if (isDraw(board)) {
      console.log("Draw");
      break;
    }
    //change current playerr
    move = changePlayer(move);
  }
  console.log("Test");
}

//init board
// exp.initBoard = (row = 3, column = 3) => {
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
  }).then(row => {
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
function makeMove(coords, board) {
  let tempBoard = board;
  tempBoard[coords[0] - 1][coords[1] - 1] = move;
  //change move

  return tempBoard;
}

//change current player
function changePlayer(move) {
  return (move = move === "x" ? "o" : "x");
}

//check for a winner
// exp.isGameFinished = (board) => {
function isGameFinished(board) {
  let similar = 0;
  //rows
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === null) {
        break;
      }
      if (j > 0 && board[i][j] != board[i][j - 1]) {
        break;
      }
      similar++;
    }
    if (similar === 3) {
      return true;
    } else {
      similar = 0;
    }
  }
  //columns
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[j][i] === null) {
        break;
      }
      if (j > 0 && board[j][i] != board[j - 1][i]) {
        break;
      }
      similar++;
    }
    if (similar === 3) {
      return true;
    } else {
      similar = 0;
    }
  }
  //diagonals
  for (let i = 0; i < board.length; i++) {
    let j = i;
    if (board[i][j] === null) {
      break;
    }
    if (j > 0 && board[i][j] !== board[i - 1][j - 1]) {
      break;
    }
    similar++;
  }
  if (similar === 3) {
    return true;
  } else {
    similar = 0;
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = board[i].length - 1; j >= 0; j--) {
      if (j === i || Math.abs(j - i) >= 2) {
        if (board[i][j] === null) {
          break;
        }
        if (
          j < board[i].length - 1 &&
          i > 0 &&
          board[i][j] !== board[i - 1][j + 1]
        ) {
          break;
        }
        similar++;
      }
    }
  }
  if (similar === 3) {
    return true;
  } else {
    similar = 0;
  }
  return false;
}
//check for a draw

// exp.isDraw = function (board) {
function isDraw(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === null) {
        return false;
      }
    }
  }
  return true;
}

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
