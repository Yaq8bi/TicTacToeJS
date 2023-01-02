import Game from "./Game.js";
import GameView from "./GameView.js"
let game = new Game();
let gameView = new GameView();
gameView.updateBoard(game);

console.log(game.board);
console.log("my turn is", game.turn);