//Tic Tac Toe game
"use strict";

const readline = require("readline");

const Board = require("./classes/board");
const UserInput = require("./classes/input");
const GameEnd = require("./classes/gameEnd");
const Controller = require("./classes/controller");
const UI = require("./classes/ui");
const db = require("./classes/db");

let controller = new Controller(Board, UserInput, GameEnd);
let cli = new UI(controller);
cli.userPrompt();