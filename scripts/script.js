function getComputerChoice() {

    const randomNum = generateRandNumber();
    switch (randomNum) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function generateRandNumber() {
    return Math.floor(Math.random() * 3) + 1;
}

function promptHumanInput(message) {

    let humanInput = prompt(message);
    return humanInput;
}

function validateHumanInput(humanInput) {
    let isHumanInputValid = false;

    if (humanInput === "" || humanInput === undefined || humanInput === null) {
        return isHumanInputValid;
    }

    switch (humanInput.toLowerCase()) {
        case "rock":
        case "paper":
        case "scissors":
            isHumanInputValid = true;
            break;
    }

    return isHumanInputValid;
}

function formatHumanChoice(humanInput) {

    humanInput = (humanInput.toLowerCase()).split("");
    humanInput[0] = humanInput[0].toUpperCase();
    return humanInput.join("");

}

function getHumanChoice() {

    let message = "Rock, paper or scissors? Enter your choice:";
    let errorMessage = "Oops. Make sure that your input isn't empty and is either rock, paper or scissors:";
    let humanInput = promptHumanInput(message);

    while (!validateHumanInput(humanInput)) {
        humanInput = promptHumanInput(errorMessage);
    }

    return formatHumanChoice(humanInput);

}

function printRoundResult(computerChoice, humanChoice, isWin, isDraw) {
    if (isDraw) {
        console.log(`Its a draw! Both selected ${computerChoice}`);
        return;
    }

    if (isWin) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        return;
    }
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        printRoundResult(computerChoice, humanChoice, false, true);
        return "draw";
    }

    if (computerChoice === "Rock") {

        if (humanChoice === "Paper") {
            printRoundResult(computerChoice, humanChoice, true, false);
            return "win";
        } else {
            printRoundResult(computerChoice, humanChoice, false, false);
            return "loss";
        }
    } else if (computerChoice === "Paper") {

        if (humanChoice === "Scissors") {
            printRoundResult(computerChoice, humanChoice, true, false);
            return "win";
        } else {
            printRoundResult(computerChoice, humanChoice, false, false);
            return "loss";
        }
    } else if (computerChoice === "Scissors") {

        if (humanChoice === "Rock") {
            printRoundResult(computerChoice, humanChoice, true, false);
            return "win";
        } else {
            printRoundResult(computerChoice, humanChoice, false, false);
            return "loss";
        }
    }

}

function playGame() {

    let computerScore = 0;
    let humanScore = 0;

    for (let i = 0; i < 5; i++) {

        console.log(`\nRound ${i + 1}.\n\n`);
        switch (playRound(getComputerChoice(), getHumanChoice())) {
            case "draw":
                break;
            case "win":
                ++humanScore;
                break;
            case "loss":
                ++computerScore;
                break;
        }

        console.log(`Computer score: ${computerScore}`);
        console.log(`Human score: ${humanScore}`);
    }

    if (computerScore > humanScore) {
        console.log(`\nComputer won!`)
    } else if (computerScore < humanScore) {
        console.log(`\nYou won!`)
    } else {
        console.log(`\nIt's a draw!`)
    }

}


playGame();




















