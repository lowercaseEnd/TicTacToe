class AI {
  constructor() {}
  randomMove() {
    return [Math.floor(Math.random() * 3) + 1, Math.floor(Math.random() * 3) + 1];
  }
}

module.exports = AI;