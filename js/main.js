import Game from "./Game.js";
import GameView from "./GameView.js";


let game = new Game();
let gameView = new GameView();

document.querySelector(".restart").addEventListener("click", () => {
    onRestartClick();
    console.log("🔥 New Game");
})

let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
        onTileClick(tile.dataset.index);
        console.log("🍒 Tile ", tile.dataset.index, " Clicked");
    });
});

const onTileClick = (i) => {
    game.makeMove(i);
    gameView.updateBoard(game);
};

function onRestartClick() {
    game = new Game();
    gameView.updateBoard(game);
}