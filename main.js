//Tic Tac Toe game
"use strict";

const boardModule = require("./board");
const userInput = require("./input");

//exports for testing
console.log(module.children[1]);
//variable to track current move, starts with x.
let move = "x";
playGame();
async function playGame() {
  // let t = new userInput();
  let board = new boardModule();
  let playGround = board.initBoard(); 
  while (true) {
    board.printBoard(playGround);
    let move;
    await userInput.getCoordinates().then(res => (move = res));
    if (userInput.isInputCorrect(move, playGround)) {
      playGround = makeMove(move, playGround);
    } else {
      console.log("You've entered wrong values.");
      continue;
    }
    board.printBoard(playGround);
    if (isGameFinished(playGround)) {
      console.log(`Player ${move} has won.`);
      break;
    }
    if (isDraw(playGround)) {
      console.log("Draw");
      break;
    }
    //change current playerr
    move = changePlayer(move);
  }
  console.log("Test");
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