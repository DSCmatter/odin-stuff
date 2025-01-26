console.log("Hello world");

const choices = ["rock", "paper", "scissors"];

let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    let choice = prompt("Enter your choice (rock, paper, or scissors):");
    while (!["rock", "paper", "scissors"].includes(choice.toLowerCase())) {
        choice = prompt("Invalid choice! Please enter rock, paper, or scissors:").toLowerCase();
    }

    return choice.toLowerCase();
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        return "It's a tie!";
    } else if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        computerScore++;
        return "Computer wins this round!";
    } else {
        humanScore++;
        return "Human wins this round!";
    }
}

const computerChoice = getComputerChoice();
console.log("Computer choice:", computerChoice);

const humanChoice = getHumanChoice();
console.log("Human choice:", humanChoice);

const result = playRound(computerChoice, humanChoice);
console.log(result);
console.log("Current Score - Computer:", computerScore, "Human:", humanScore);
