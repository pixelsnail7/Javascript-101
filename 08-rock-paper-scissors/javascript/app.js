const totalScore = document.getElementById("totalScore");
const winScore = document.getElementById("winScore");
const tiesScore = document.getElementById("tiesScore");
const loseScore = document.getElementById("loseScore");
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");

class game {
    constructor() {
        this.total = 0;
        this.win = 0;
        this. ties = 0;
        this.loseScore = 0;
    }

    updateScore() {
        this.total++;
        totalScore.textContent = this.total;
        winScore.textContent = this.win;
        tiesScore.textContent = this.ties;
        loseScore.textContent = this.loseScore;
    }

    computerChoice() {
        return Math.floor(Math.random() * 3);
    }

    chackWiner(choice) {
        const computer = this.computerChoice();
        if (choice === computer) {
            this.ties++;
            this.updateScore();
            return "Tie";
        } else if (
            (choice === 0 && computer === 2) ||
            (choice === 1 && computer === 0) ||
            (choice === 2 && computer === 1)
        ) {
            this.win++;
            this.updateScore();
            return "You Win";
        } else {
            this.loseScore++;
            this.updateScore();
            return "You Lose";
        }
    }
}


const game_c = new game();

rockBtn.addEventListener("click", () => game_c.chackWiner(0));
paperBtn.addEventListener("click", () => game_c.chackWiner(1));
scissorsBtn.addEventListener("click", () => game_c.chackWiner(2));