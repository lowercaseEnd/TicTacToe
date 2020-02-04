const readline = require("readline");

class UI {
  constructor() {}
  prompt() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    while (true) {
      let cli = new Promise(resolve => {
        rl.question(
          "1.Two players\n2.Player vs AI3.AI vs AI\n.4.Quit",
          answer => {
            resolve(answer);
          }
        );
      });
      cli.then(answer => {
        switch (answer) {
          case "1":
            break;
          case "2":
            break;
          case "3":
            break;
          case "4":
            break;
          default:
            break;
        }
      });
    }
  }
}
