const ROCK = "Rock";
const SCISSORS = "Scissors";
const PAPER = "Paper";
const PLAYER_WINS = "Player Wins!";
const COMPUTER_WINS = "Computer Wins!";

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  let computerChoice;
  if (randomNumber == 1) {
    computerChoice = ROCK;
  } else if (randomNumber == 2) {
    computerChoice = SCISSORS;
  } else {
    computerChoice = PAPER;
  }
  return computerChoice;
}
function getPlayerChoice() {
  const playerChoice = prompt("Enter your choice! Rock Paper or Scissors?");
  if (!playerChoice) {
    console.error("No input");
    return ROCK;
  }
  const arrayPlayerChoice = playerChoice.toLowerCase().split("");
  const upperCasePlayerchoice = arrayPlayerChoice[0].toUpperCase();
  arrayPlayerChoice[0] = upperCasePlayerchoice;
  const perfectPlayerChoice = arrayPlayerChoice.join("");
  if (
    perfectPlayerChoice !== ROCK &&
    perfectPlayerChoice !== PAPER &&
    perfectPlayerChoice !== SCISSORS
  ) {
    console.error("Wrong input");
    return ROCK;
  } else {
    return perfectPlayerChoice;
  }
}
function playRound(playerChoice, computerChoice) {
  console.log("Player choice:", playerChoice);
  console.log("Computer choice:", computerChoice);
  if (playerChoice === computerChoice) {
    return "It's a Draw!";
  }
  if (playerChoice === ROCK && computerChoice === SCISSORS) {
    return PLAYER_WINS;
  }
  if (playerChoice === SCISSORS && computerChoice === PAPER) {
    return PLAYER_WINS;
  }
  if (playerChoice === PAPER && computerChoice === ROCK) {
    return PLAYER_WINS;
  }
  if (playerChoice === ROCK && computerChoice === PAPER) {
    return COMPUTER_WINS;
  }
  if (playerChoice === SCISSORS && computerChoice === ROCK) {
    return COMPUTER_WINS;
  }
  if (playerChoice === PAPER && computerChoice === SCISSORS) {
    return COMPUTER_WINS;
  }
}
function game() {
  let playerWins = 0;
  let computerWins = 0;
  let draws = 0;
  for (let i = 0; i < 5; i++) {
    let result = playRound(getPlayerChoice(), getComputerChoice());
    if (result === PLAYER_WINS) {
      playerWins++;
    } else if (result === COMPUTER_WINS) {
      computerWins++;
    } else draws++;
  }
  if (playerWins > computerWins) {
    return "Player Wins the game.";
  }
  if (computerWins > playerWins) {
    return "Player Wins the game.";
  } else return "Its a Draw";
}
console.log(game());
