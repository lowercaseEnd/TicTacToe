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
    board.printBoard(playGround);
    while (true) {
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
  //player vs ai
  async playerAI() {
    let board = new this.Board();
    let playGround = board.initBoard();
    board.printBoard(playGround);
    while (true) {
      //assume player is x
      let move;
      if(this.playerValue === "x") {
        await this.UserInput.getCoordinates().then(res => (move = res));
      } else {
        move = this.aiMove();
      }
      if (this.UserInput.isInputCorrect(move, playGround)) {
        playGround = this.makeMove(move, playGround);
      } else {
        if(this.playerValue === "x") {
          console.log("You've entered wrong values.");
        }
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
  //ai vs ai
  //todo: add a delay between moves
  aiOnly() {
    let board = new this.Board();
    let playGround = board.initBoard();
    board.printBoard(playGround);
    while (true) {
      let move = this.aiMove();
      if (this.UserInput.isInputCorrect(move, playGround)) {
        playGround = this.makeMove(move, playGround);
      } else {
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
  
  aiMove() {
    return [Math.floor(Math.random() * 3) + 1, Math.floor(Math.random() * 3) + 1];
  }
  //player move
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