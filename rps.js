function getComputerChoice() {
    let number = Math.floor(Math.random() *3);
    if (number == 0) {
        return "rock";
    } else if (number == 1) {
        return "paper";
    } else {
        return "scissors";
    };
}

// Play a single round of rps; currently works once per page load
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection) {
        return "You tied! Try again";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        return "Paper beats rock! You lose";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        return "Rock beats scissors! You win!"
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));