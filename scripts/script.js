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

    if (humanInput == "" || humanInput === undefined) {
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



function getHumanChoice() {

    let message = "Rock, paper or scissors? Enter your choice:";
    let humanInput = promptHumanInput(message);

    while (!validateHumanInput(humanInput)) {
        message = "Oops. Make sure that your input isn't empty and is either rock, paper or scissors:";
        humanInput = promptHumanInput(message);
    }

    return humanInput.toLowerCase();

}
let computerScore = 0;
let humanScore = 0;

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

console.log(computerChoice);
console.log(humanChoice);