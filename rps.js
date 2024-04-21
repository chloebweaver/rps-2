// Randomly choose between rock, paper, or scissors
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
        alert("You tied! Try again");
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        alert("Paper beats rock! You lose");
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        alert("Rock beats scissors! You win!");
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        alert("Paper beats rock! You win!");
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        alert("Scissors beats paper! You lose");
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        alert("Rock beats scissors! You lose");
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        alert("Scissors beats paper! You win!");
    }
}

// Play one five-round game
/* function playGame() {
    for (let counter = 0; counter < 5; counter++) {
        let playerSelection = prompt("Rock, paper, or scissors?");
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    };
}

playGame(); */

/* TO DOs:
1. Create three buttons, one for each selection.
2. Add an event listener to the buttons that call playRound()
    with the correct playerSelection every time a button is
    clicked.
3. Add a <div> for displaying results and change all of your
    console.logs for this step.
4. Display the running score, and announce the winner of a
    game once one player reaches five points.
Note: You will likely have to refactor your original code to
make it work for this. That's okay! Reworking old code is an
important part of a programmer's life. */

