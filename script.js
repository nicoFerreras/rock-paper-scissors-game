let playerScore = 0
let computerScore = 0
let playerSelection = prompt("Choose...", '') /* Le pido al usuario un input */


playRound(playerSelection); /*Llamo a la función*/

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  } /*Función para pedirle a la maquina que escoja un valor*/

  function playRound(playerSelection) { /*Juego*/
    let computerSelection = getComputerChoice()
    let result = "";

   if ((playerSelection == 'rock' && computerSelection == 'scissors') || /*Piedra papel o tijera, osea el juego*/
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')) {

            playerScore += 1; /*Si el usuario gana se le suma un punto, esta acción dejara el mensaje de que gano, y cuanta puntuación tiene*/
            result = `You win! ${playerSelection} beats ${computerSelection}. Now your score is: ${playerScore}, and the computer score is: ${computerScore}`

            if (playerScore == 5) { /*Si la puntuacion llega a 5 el usuario gana*/
                result = "You won! congratulations, if you want to continue please reset the web."
            }
        } 
        else if (playerSelection == computerSelection) /*Si los valores de la maquina y el usuario coinciden es un empate*/ {
            result = ("Its a tie! ");
        } 
        else /*Mensaje en caso de que la maquina gane*/{
            computerScore += 1
            result = `You lose, your score is: ${playerScore} and the computer score is: ${computerScore} `
            
            if (computerScore == 5) /*Si la maquina llega a 5 gana*/
            result = ("You lose the game, please reset the web if you want to continue")
        }
        alert(result);
    } 

    while (playerScore < 5 && computerScore < 5) {
        let playerSelection = prompt("Choose...", "");
        playRound(playerSelection.toLowerCase());
    }
    
    /*Loop para que siga pidiendo un prompt hasta que alguno llegue a 5*/






  

  
