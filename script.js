let userWins = 0;
let computerWins = 0;

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getHumanChoice(userChoice) {
    document.getElementById('player').innerHTML = `You selected: ${userChoice}`;
    let computerChoice = getComputerChoice();
    document.getElementById('computerPlayer').innerHTML = `Opponent selected: ${computerChoice}`;
    determineWinner(userChoice, computerChoice);
}

function determineWinner(userChoice, computerChoice) {
    let result = "";
    if (userChoice === computerChoice) {
        result = "It's a draw!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
        userWins++;
    } else {
        result = "Opponent wins!";
        computerWins++;
    }
    document.getElementById('outcome').innerHTML = result;
    document.getElementById('userWins').innerHTML = `Your Wins: ${userWins}`;
    document.getElementById('computerWins').innerHTML = `Opponent Wins: ${computerWins}`;
}

document.getElementById('rock').addEventListener('click', function () {
    getHumanChoice('rock');
});
document.getElementById('paper').addEventListener('click', function () {
    getHumanChoice('paper');
});
document.getElementById('scissors').addEventListener('click', function () {
    getHumanChoice('scissors');
});
