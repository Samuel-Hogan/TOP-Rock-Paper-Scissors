console.log("Hello World")

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        computerChoice = "rock";
    }else if (computerChoice == 1) {
        computerChoice = "paper";
    }else {
        computerChoice = "scissors"
    }
    return computerChoice;
}


function getHumanChoice() {
    let input = event.target.textContent;
    return input;
}
let humanScore = 0;
let computerScore = 0;

function playGame() {
    

    const container = document.querySelector("#container");
    const newDiv = document.createElement("div");
    newDiv.textContent = "";
    container.appendChild(newDiv);

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === computerChoice) {
            newDiv.textContent = "It's a tie! You both chose" + " " + event.target.textContent + ".";
        }else if (
            humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "scissors" && computerChoice === "paper"
        ) {
            newDiv.textContent = "You Win" + " " + event.target.textContent + " beats " + `${computerChoice}` + ".";
            humanScore++;
        }else {
            newDiv.textContent = "You Lose " + `${computerChoice}` + " beats " + event.target.textContent + ".";
            computerScore++;
        }
    }
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    

    if (humanScore > computerScore) {
    console.log(`You win the game! ${humanScore} - ${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log(`You lose the game! ${computerScore} - ${humanScore}`);
  } else {
    console.log(`The game is a tie! ${humanScore} - ${computerScore}`);
  }
}

const btn = document.querySelector("#buttons");
btn.addEventListener("click", playGame);