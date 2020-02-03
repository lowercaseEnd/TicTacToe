class Board {
  constructor() {}
  //init board
  // exp.initBoard = (row = 3, column = 3) => {
  initBoard(row = 3, column = 3) {
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
  //pretty print board
  printBoard(board) {
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
}

module.exports = Board;