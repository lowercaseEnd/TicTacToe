//Tic Tac Toe game
"use strict";

const readline = require("readline");

const Board = require("./classes/board");
const UserInput = require("./classes/input");
const GameEnd = require("./classes/gameEnd");
const Controller = require("./classes/controller");

let controller = new Controller(Board, UserInput, GameEnd);
userPrompt();
async function userPrompt() {
  let correct = false;
  while (!correct) {
    let answer;
    await userAnswer().then(response => {
      answer = response;
    });
    if (answer === "1") {
      controller.playGame();
      correct = true;
    } else if (answer === "2") {
      controller.playerAI();
      correct = true;
    } else if (answer === "3") {
      controller.aiOnly();
      correct = true;
    } else if (answer === "4") {
      correct = true;
    } else {
      console.log("Enter valid number");
    }
  }
}

function userAnswer() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise(resolve => {
    rl.question(
      "1.Two players\n2.Player vs AI\n3.AI vs AI\n4.Quit\n",
      answer => {
        rl.close();
        resolve(answer);
      }
    );
  });
}
