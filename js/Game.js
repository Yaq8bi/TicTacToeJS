//The logic of the game
export default class Game{

    constructor(){
        console.log("init game");
        this.board = new Array(9).fill(null)
    }

    nextTurn(){
        if (this.turn == "X") {
            this.turn = "O";
        } else {
            this.turn = "X";
        }

    }

    makeMove(i){
        this.board[i] = this.turn;
    }



}