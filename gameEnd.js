class GameEnd {
  constructor() {}
  //check for a winner
  static isGameFinished(board) {
    let similar = 0;
    //rows
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        if (board[i][j] === null) {
          break;
        }
        if (j > 0 && board[i][j] != board[i][j - 1]) {
          break;
        }
        similar++;
      }
      if (similar === 3) {
        return true;
      } else {
        similar = 0;
      }
    }
    //columns
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[j][i] === null) {
          break;
        }
        if (j > 0 && board[j][i] != board[j - 1][i]) {
          break;
        }
        similar++;
      }
      if (similar === 3) {
        return true;
      } else {
        similar = 0;
      }
    }
    //diagonals
    for (let i = 0; i < board.length; i++) {
      let j = i;
      if (board[i][j] === null) {
        break;
      }
      if (j > 0 && board[i][j] !== board[i - 1][j - 1]) {
        break;
      }
      similar++;
    }
    if (similar === 3) {
      return true;
    } else {
      similar = 0;
    }
    for (let i = 0; i < board.length; i++) {
      for (let j = board[i].length - 1; j >= 0; j--) {
        if (j === i || Math.abs(j - i) >= 2) {
          if (board[i][j] === null) {
            break;
          }
          if (
            j < board[i].length - 1 &&
            i > 0 &&
            board[i][j] !== board[i - 1][j + 1]
          ) {
            break;
          }
          similar++;
        }
      }
    }
    if (similar === 3) {
      return true;
    } else {
      similar = 0;
    }
    return false;
  }
  //check for a draw

  static isDraw(board) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === null) {
          return false;
        }
      }
    }
    return true;
  }
}

module.exports = GameEnd;