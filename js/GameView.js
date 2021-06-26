export default class GameView {

    constructor() {
        console.log("🥝 Init Game View");
    }

    updateBoard(game) {
        console.log("🍄 Current Game:", game.board);
        this.updateTurn(game);
        const winningCombo = game.findWinningCombos();

        for (let i = 0; i < game.board.length; i++) {
            const tile = document.querySelector(`.board-tile[data-index='${i}']`);

            tile.classList.remove("tile-winner");

            let tileType = game.board[i] == "X" ? "tileX" : "tileO";
            tile.innerHTML = `<span class="${tileType}">${game.board[i] ? game.board[i] : ""}</span>`;
            
            if (winningCombo && winningCombo.includes(i)) {
                tile.classList.add("tile-winner");
                if (game.turn == "X") {
                    document.querySelector(".playerX span").textContent = "⭐ Player X ⭐";
                }
                else {
                    document.querySelector(".playerO span").textContent = "⭐ Player O ⭐";
                }
            }
        }
    }

    updateTurn(game) {
        let playerX = document.querySelector(".playerX");
        let playerO = document.querySelector(".playerO");

        playerX.classList.remove("active");
        playerO.classList.remove("active");

        if (game.turn == "X") {
            playerX.classList.toggle("active");
        }
        else {
            playerO.classList.toggle("active");
        }
    }

}