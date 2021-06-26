export default class Game {

    constructor() {
        console.log("🍑 Init Game");
        this.turn = "X";
        this.board = new Array(9).fill(null);
        document.querySelector(".playerX span").textContent = "Player X";
        document.querySelector(".playerO span").textContent = "Player O";
        console.log(this.board);
    }

    nextTurn() {
        if (this.turn == "X") {
            this.turn = "O";
        } else {
            this.turn = "X";
        }
    }

    makeMove(i) {
        if (this.endOfGame()) {
            return;
        }

        if (this.board[i]) {
            return;
        }
        this.board[i] = this.turn;

        let winningCombo = this.findWinningCombos();
        console.log("🎉 Winner:", winningCombo);

        if (!winningCombo) {
            this.nextTurn();
        }
    }

    findWinningCombos() {
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (const combo of winningCombos) {
            const [a, b, c] = combo;

            if (this.board[a] &&
                this.board[a] === this.board[b] &&
                this.board[a] === this.board[c]) {
                return combo;
            }
        }
        return null;
    }

    endOfGame() {
        let winningCombo = this.findWinningCombos();
        
        if (winningCombo) {
            return true;
        }
        else {
            return false;
        }
    }
}
