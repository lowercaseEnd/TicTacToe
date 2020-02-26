//Tic Tac Toe game
"use strict";

const readline = require("readline");

const Board = require("./classes/board");
const UserInput = require("./classes/input");
const GameEnd = require("./classes/gameEnd");
const Controller = require("./classes/controller");

const db = require("./mariadb");

let controller = new Controller(Board, UserInput, GameEnd);

userPrompt();
async function checkDB(userData) {
  console.log(userData);
  let conn = await db.getConnection();
  const user = await conn.query(`select * from users where name = '${userData}'`);
  if(user[0] === undefined) {
    const id = await conn.query(`select max(id) from users`);
    const res = await conn.query(`insert into users value (?, ?)`, [id[0]["max(id)"] + 1, userData]);
    console.log(res);
  }
  conn.end();
  console.log(`Hello, ${userData}`);
}
function login() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  let userName = new Promise(resolve => {
    rl.question("Enter your name: ", name => {
      rl.close();
      resolve(name);
    });
  });
  return userName;
}

async function userPrompt() {
  let correct = false;
  while (!correct) {
    let answer;
    await userAnswer().then(response => {
      answer = response;
    });
    if (answer === "1") {
      await login().then(data => checkDB(data));
      await login().then(data => checkDB(data));
      
      controller.playGame();
      correct = true;
    } else if (answer === "2") {
      await login().then(data => checkDB(data));
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
  console.log("fin");
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
