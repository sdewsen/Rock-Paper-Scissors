function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 4);
  let computerChoice;
  if (randomNumber) {
    randomNumber = 0;
    computerChoice = Rock;
  } else if (randomNumber) {
    randomNumber = 1;
    computerChoice = Paper;
  } else {
    computerChoice = Scissors;
  }
  return computerChoice;
}
