class Controller {
  playerValue = "x";
  constructor(Board, UserInput, GameEnd) {
    this.Board = Board;
    this.UserInput = UserInput;
    this.GameEnd = GameEnd;
  }
  async playGame() {
    // let t = new UserInput();
    let board = new this.Board();
    let playGround = board.initBoard();
    while (true) {
      board.printBoard(playGround);
      let move;
      await this.UserInput.getCoordinates().then(res => (move = res));
      if (this.UserInput.isInputCorrect(move, playGround)) {
        playGround = this.makeMove(move, playGround);
      } else {
        console.log("You've entered wrong values.");
        continue;
      }
      board.printBoard(playGround);
      if (this.GameEnd.isGameFinished(playGround)) {
        console.log(`Player ${this.playerValue} has won.`);
        break;
      }
      if (this.GameEnd.isDraw(playGround)) {
        console.log("Draw");
        break;
      }
      //change current playerr
      this.playerValue = this.changePlayer(this.playerValue);
    }
  }
  //make a move
  makeMove(coords, board) {
    let tempBoard = board;
    tempBoard[coords[0] - 1][coords[1] - 1] = this.playerValue;
    //change move

    return tempBoard;
  }

  //change current player
  changePlayer(move) {
    return (move = move === "x" ? "o" : "x");
  }
}

module.exports = Controller;