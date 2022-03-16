/**
 * * Declare constants for DOM elements
 * and possible choices
 * */

const buttons = document.getElementsByClassName("control");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const messages = document.getElementById("messages");
const choices = ["rock", "paper", "scissors"];

/**
 * add event listener to all buttons
 */

for (let button of buttons) {
  button.addEventListener("click", function () {
       let playerChoice = this.getAttribute("data-choice");
       playGame(playerChoice);
  });
}



possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
  
  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
      result = 'its a draw!'
    }
    if (computerChoice === 'rock' && userChoice === "paper") {
      result = 'you win!'
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
      result = 'you lost!'
    }
    if (computerChoice === 'paper' && userChoice === "scissors") {
      result = 'you win!'
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
      result = 'you lose!'
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
      result = 'you win!'
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
      result = 'you lose!'
    }
    resultDisplay.innerHTML = result
  }