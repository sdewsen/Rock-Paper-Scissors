function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  let computerChoice;
  if (randomNumber == 1) {
    computerChoice = "Rock";
  } else if (randomNumber == 2) {
    computerChoice = "Scissors";
  } else {
    computerChoice = "Paper";
  }
  console.log(computerChoice);
  return computerChoice;
}
getComputerChoice();

function getPlayerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  let playerChoice;
  if (randomNumber == 1) {
    playerChoice = "Rock";
  } else if (randomNumber == 2) {
    playerChoice = "Scissors";
  } else {
    playerChoice = "Paper";
  }
  console.log(playerChoice);
  return playerChoice;
}
getPlayerChoice();

function playRound(playerSelection, computerSelection) {}
