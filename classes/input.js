const readline = require("readline");

class UserInput {
  constructor() {}
  //read user input

  //user entered numbers should be on 1 greater than array indexes
  static getCoordinates() {
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
        rl.question("Enter column: ", column => {
          rl.close();
          resolve([row, column]);
        });
      });
    });
    return coords;
  }
  //validate user input
  static isInputCorrect(userInput, board) {
    //check for valid number
    let numberRow = +userInput[0];
    let numberColumn = +userInput[1];
    if (isNaN(numberColumn) || isNaN(numberRow)) {
      return false;
    }
    let isEmptyRow = parseInt(userInput[0]);
    let isEmptyColumn = parseInt(userInput[1]);
    if (isNaN(isEmptyRow) || isNaN(isEmptyColumn)) {
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
}

module.exports = UserInput;
