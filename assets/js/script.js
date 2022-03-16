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
 
 /**
  * The Main game function. accepts parameter which 
  * is data choice of the selected button 
  */
 
 function playGame(playerChoice) {
 
   playerImage.src = `assets/images/${choices[playerChoice]}.png`;
   playerImage.alt = choices[playerChoice];
 }
 
 let computerChoice = Math.floor(Math.random() * 3 );
 
 computerImage.src = `assets/images/${choices[computerChoice]}.png`;
 computerImage.alt = choices[computerChoice];
 
 let result = checkWinner(choices[computerChoice], choices[playerChoices]);
 
 updateScore(result);
 
 /**
  * end 
  */
 
 //Result to tell you who has won.

function getResult(){
  if(computerChoiceDisplay.innerHTML === 'rock' && userChoice === 'rock'){
      result = 'Draw, you both have rock!';
  // Draw
  
  }
  if(computerChoiceDisplay.innerHTML === 'paper' && userChoice === 'paper'){
      result = 'Draw, you both have paper!';
  // Draw

  }
  if(computerChoiceDisplay.innerHTML === 'scissors' && userChoice === 'scissors'){
      result = 'Draw, you both have scissors!';
  // Draw

  }
 
  
  if(computerChoiceDisplay.innerHTML === 'rock' && userChoice === 'paper'){
      result = 'You Win, paper wraps rock !';
      win();

  }
  if(computerChoiceDisplay.innerHTML === 'rock' && userChoice === 'scissors'){
      result = 'You lost!, scissors gets jammed by rock  ';
      lose();
  
 
  
  if(computerChoiceDisplay.innerHTML === 'paper' && userChoice === 'scissors'){
      result= 'You Win!, scissors cuts paper';
      win();
      
  }
  if(computerChoiceDisplay.innerHTML === 'paper' && userChoice === 'rock'){
      result= 'You lost!, rock gets wrapped by paper';
      lose();
      
  }
  
 
  if(computerChoiceDisplay.innerHTML === 'scissors' && userChoice === 'rock'){
      result= 'You Win!, rock jams scissors';
      win();
      
  }
  if(computerChoiceDisplay.innerHTML === 'scissors' && userChoice === 'paper'){
      result= 'You lost!, paper gets cut by scissors';
      lose();
      
  }
 
  resultDisplay.innerHTML = result;
}

//Gets current score from DOM and increments by 1

function win(){
  playerScore++;
  playerScoreSpan.innerHTML = playerScore;
  computerScoreSpan.innerHTML = computerScore;
  
}
function lose(){
  computerScore++;
  computerScoreSpan.innerHTML = computerScore;
  playerScoreSpan.innerHTML = playerScore;

}
// resets the game at 15 and tells whomever gets there first
function gameOver(){
  if(playerScore === 15 && computerScore < 15){
      alert("You won press ok to reset the game");
      playerScore = 0;
      computerScore = 0;
  }
  if(playerScore < 15 && computerScore === 15){
      alert("You lost press ok to reset the game");
      playerScore = 0;
      computerScore = 0;

  }
}
