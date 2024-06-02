let winners = [];
const choices = ["rock", "paper", "scissors"];

function resetGame() {
    // Reset the game!
}

function startGame() {
    // Play the game until someone wins five times
    let imgs = document.querySelectorAll('img');
    imgs.forEach((img) =>
    img.addEventListener('click', () => {
        if(img.id) {
            playRound(img.id);
        }
    }))
}

function playRound(playerChoice) {
    let wins = checkWins();
    if (wins >= 5) {
        return
    };

    const computerChoice = computerSelect();

    const winner = checkWinner(playerChoice, computerChoice);
    winners.push(winner);
    tallyWins();
    displayRound(playerChoice, computerChoice, winner);
    wins = checkWins();
    if (wins == 5) {
        // display end results
        // change button to visible
        // change the text to display winner
        displayEnd();
    }
}

function displayEnd() {
    let playerWins = winners.filter((item) => item == "Player").length;

    if (playerWins == 5) {
        document.querySelector('.winner').textContent = 
        "You won 5 games; congrats!";
    } else {
        document.querySelector('.winner').textContent = 
        "Sorry, the computer won 5 times";
    }
    document.querySelector('.reset').style.display = "flex";
}

function displayRound(playerChoice, computerChoice, winner) {
    document.querySelector(
        '.playerChoice').textContent = `You Chose: ${
        playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
    }`;
    document.querySelector(
        '.computerChoice').textContent = `You Chose: ${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    }`;
    document.querySelector('.winner').textContent = `Round Winner: ${winner}`;
}

function tallyWins() {
    const pWinCount = winners.filter((item) => item == "Player").length;
    const cWinCount = winners.filter((item) => item == "Computer").length;
    const ties = winners.filter((item) => item == "tie").length;
    document.querySelector('.playerScore').textContent = `Score: ${pWinCount}`
    document.querySelector('.computerScore').textContent = `Score: ${cWinCount}`
    document.querySelector('.ties').textContent = `Score: ${ties}`
}

function computerSelect() {
// Update DOM with computer selection
    return choices[Math.floor(Math.random() * choices.length)];
}

function checkWins() {
    const pWinCount = winners.filter((item) => item == "Player").length;
    const cWinCount = winners.filter((item) => item == "Computer").length;
    return Math.max(pWinCount, cWinCount);
}

function checkWinner(choice1, choice2) {
    if (
        (choice1 == "rock" && choice2 == "scissors") ||
        (choice1 == "scissors" && choice2 == "paper") ||
        (choice1 == "paper" && choice2 == "rock")
    ) {
        return "Player";
    } else if (choice1 == choice2) {
        return "Tie";
    } else {
        return "Computer";
    }
}

function setWins() {
    const pWinCount = winners.filter((item) => item == "Player").length;
    const cWinCount = winners.filter((item) => item == "Computer").length;
    const ties = winners.filter((item) => item == "tie").length;
}

startGame();

// Randomly choose between rock, paper, or scissors
/* function getComputerChoice() {
    let number = Math.floor(Math.random() *3);
    if (number == 0) {
        return "rock";
    } else if (number == 1) {
        return "paper";
    } else {
        return "scissors";
    };
} */

// Play a single round of rps; currently works once per page load
/* function playRound(playerSelection, computerSelection) {
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
} */

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

