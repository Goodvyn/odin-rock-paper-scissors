const playerButtonPanel = document.querySelector(".player-choice-buttons-panel");
const parPlayerChoice = document.querySelector("#player-choice");
const parComputerChoice = document.querySelector("#computer-choice");
const parRoundResult = document.querySelector("#round-result");
const parGameResult = document.querySelector("#game-result");
const parPlayerScore = document.querySelector("#player-score");
const parComputerScore = document.querySelector("#computer-score");


function getComputerChoice() {

    const randomNum = generateRandNumber();
    switch (randomNum) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
        default:
            return "Error getComputerChoice(): No correct option generated"
    }
}

function generateRandNumber() {
    return Math.floor(Math.random() * 3) + 1;
}

function displayRoundInfo(
    playerChoice,
    computerChoice,
    roundResult,
    playerScore,
    computerScore,
) {
    parPlayerChoice.textContent = playerChoice;
    parComputerChoice.textContent = computerChoice;
    parRoundResult.textContent = roundResult;
    parPlayerScore.textContent = playerScore;
    parComputerScore.textContent = computerScore;
}

function displayGameResult(winnerText) {
    parGameResult.textContent = winnerText;
}

function updateScore(playerAddendScore, computerAddendScore) {
    playerScore += playerAddendScore;
    computerScore += computerAddendScore;
}

function playRound(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        updateScore(0, 0);
        displayRoundInfo(playerChoice, computerChoice, "Draw",
            playerScore, computerScore);
        return;
    }

    if (computerChoice === "Rock") {

        if (playerChoice === "Paper") {
            updateScore(1, 0);
            displayRoundInfo(playerChoice, computerChoice, "Win",
                playerScore, computerScore);
        } else {
            updateScore(0, 1);
            displayRoundInfo(playerChoice, computerChoice, "Loss",
                playerScore, computerScore);
        }
        return;

    } else if (computerChoice === "Paper") {

        if (playerChoice === "Scissors") {
            updateScore(1, 0);
            displayRoundInfo(playerChoice, computerChoice, "Win",
                playerScore, computerScore);
        } else {
            updateScore(0, 1);
            displayRoundInfo(playerChoice, computerChoice, "Loss",
                playerScore, computerScore);
        }
        return;

    } else if (computerChoice === "Scissors") {
        if (playerChoice === "Rock") {

            updateScore(1, 0);
            displayRoundInfo(playerChoice, computerChoice, "Win",
                playerScore, computerScore);

        } else {
            updateScore(0, 1);
            displayRoundInfo(playerChoice, computerChoice, "Loss",
                playerScore, computerScore);
        }
        return;
    }

}

function setPlayerChoiceOnButtonPress(event) {

    let playerChoiceButtonId = event.target.id;
    let playerChoice = "";

    switch (playerChoiceButtonId) {
        case "btn-rock":
            playerChoice = "Rock";
            break;
        case "btn-paper":
            playerChoice = "Paper";
            break;
        case "btn-scissors":
            playerChoice = "Scissors";
            break;
        default:
            throw new Error("PlayerChoice: Not set");
    }

    return playerChoice;

}

let playerScore = 0;
let computerScore = 0;
const computerWinnerText = "Computer Won!";
const playerWinnerText = "Player Won!";

playerButtonPanel.addEventListener("click", (event) => {
    let playerChoice = "";
    let computerChoice = "";

    if (playerScore < 5 && computerScore < 5) {

        try {
            playerChoice = setPlayerChoiceOnButtonPress(event);
        } catch (error) {
            return;
        }
        computerChoice = getComputerChoice();
        playRound(computerChoice, playerChoice, computerScore, playerScore);

    }

    if (playerScore == 5) {
        displayGameResult(playerWinnerText);
    } else if (computerScore == 5) {
        displayGameResult(computerWinnerText);
    }
});



















