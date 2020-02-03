//Tic Tac Toe game
"use strict";

const boardModule = require("./board");
const userInput = require("./input");
const GameEnd = require("./gameEnd");

//exports for testing
// console.log(module.children[1]);
//variable to track current move, starts with x.
let playerValue = "x";
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
    if (GameEnd.isGameFinished(playGround)) {
      console.log(`Player ${playerValue} has won.`);
      break;
    }
    if (GameEnd.isDraw(playGround)) {
      console.log("Draw");
      break;
    }
    //change current playerr
    playerValue = changePlayer(playerValue);
  }
  console.log("Test");
}

//make a move
function makeMove(coords, board) {
  let tempBoard = board;
  tempBoard[coords[0] - 1][coords[1] - 1] = playerValue;
  //change move

  return tempBoard;
}

//change current player
function changePlayer(move) {
  return (move = move === "x" ? "o" : "x");
}