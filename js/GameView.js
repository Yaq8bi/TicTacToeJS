export default class GameView {


    constructor(){
        console.log("init game view")
    }

    updateBoard(game){
        console.log("this is a board within GameView")
        console.log(game.board);
        for(let i = 0; i< game.board.length; i++){
            const tile = document.querySelector(".board-tile[data-index='0']")
            console.log(tile)
        }
    }


}