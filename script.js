
let playerScore = 0
let computerScore = 0



function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}



function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
  let result = "";
  

  if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
      (playerSelection == 'paper' && computerSelection == 'rock') ||
      (playerSelection == 'scissors' && computerSelection == 'paper')) {

    playerScore += 1;
    result = `You win! ${playerSelection} beats ${computerSelection}.`;

    if (playerScore == 5) {
      result = "You win! congratulations, if you want to continue please restart the web.";
      playerScore = 0;
      computerScore = 0;
    }
  } else if (playerSelection == computerSelection) {
    result = "It's a tie!";
  } else {
    computerScore += 1;
    result = `You lose, ${computerSelection} beat ${playerSelection}.`;

    if (computerScore == 5) {
      result = "You lose the game, please restart the web if you want to continue";
      playerScore = 0;
      computerScore = 0;
    }
  }

  document.getElementById("result").textContent = result;
  document.getElementById("leftScore").textContent = playerScore;
  document.getElementById("rightScore").textContent = computerScore;
}


// An event listener to play with buttons
const buttons = document.querySelectorAll('input')
buttons.forEach((button) => {
  button.addEventListener('click', function() {
    playRound(button.value);
  });
});

