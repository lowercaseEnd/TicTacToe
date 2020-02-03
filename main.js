//Tic Tac Toe game
"use strict";

const Board = require("./board");
const UserInput = require("./input");
const GameEnd = require("./gameEnd");
const Controller = require("./controller");

let controller = new Controller(Board, UserInput, GameEnd);
controller.playGame();
