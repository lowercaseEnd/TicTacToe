const readline = require("readline");
const DB = require("./db");

class UI {
  constructor(controller) {
    this.controller = controller;
    let temp = new DB();
    this.db = temp.connector;
  }
  async userPrompt() {
    let correct = false;
    while (!correct) {
      let answer;
      await this.userAnswer().then(response => {
        answer = response;
      });
      if (answer === "1") {
        await this.login().then(data => DB.checkDB(data, this.db));
        await this.login().then(data => DB.checkDB(data, this.db));
        
        await this.controller.playGame();
        correct = true;
      } else if (answer === "2") {
        await this.login().then(data => DB.checkDB(data, this.db));
        await this.controller.playerAI();
        correct = true;
      } else if (answer === "3") {
        this.controller.aiOnly();
        correct = true;
      } else if (answer === "4") {
        correct = true;
      } else {
        console.log("Enter valid number");
      }
    }
  }
  
  userAnswer() {
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
  login() {
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
}

module.exports = UI;