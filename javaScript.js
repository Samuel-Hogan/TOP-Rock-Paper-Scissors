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
    let input = prompt("Choose: Rock Paper or Scissors", "Rock");
    return input;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === computerChoice) {
            console.log(`It's a tie! You both chose ${humanChoice}.`);
        }else if (
            humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "scissors" && computerChoice === "paper"
        ) {
            console.log(`You Win ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }else {
            console.log(`You Lose ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    if (humanScore > computerScore) {
    console.log(`You win the game! ${humanScore} - ${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log(`You lose the game! ${computerScore} - ${humanScore}`);
  } else {
    console.log(`The game is a tie! ${humanScore} - ${computerScore}`);
  }
}

playGame();