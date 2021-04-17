function computerPlay (computerRoll = 3) {
    let randomNum = Math.floor(Math.random() * computerRoll); 
    (randomNum == 0) ? computerRoll = "rock" :
    (randomNum == 1) ? computerRoll = "scissors" :
    computerRoll = "paper";
    return computerRoll;
} 

function playRound(playerChoice, computerChoice) {  // Compare computer's and user's choices to declare a winner
   let roundOver = (playerChoice == computerChoice) ? "ties with" :
   (playerChoice == "paper" && computerChoice == "rock") ||
   (playerChoice == "scissors" && computerChoice == "paper") ||
   (playerChoice == "rock" && computerChoice == "scissors") ? "wins over"  :
   "loses to";
   
   console.log(`${playerChoice} ${roundOver} ${computerChoice}`)
   return roundOver;
}
   function createButtons(idName) {
      const playerButton = document.createElement('button');
      playerButton.id = idName;
      playerButton.textContent = idName;
      playerButton.classList.toggle('buttons-play');
      return playerButton;
   }
   buttonsContainer.append(createButtons('Rock'));
   buttonsContainer.append(createButtons('Paper'));
   buttonsContainer.append(createButtons('Scissors'));

   const btns = document.querySelectorAll('button')
   btns.forEach((button) => {
   
      button.addEventListener('click', playRound(buttonsContainer.id, computerPlay()));

   })
       console.log(`Player Score : ${playerScore}
Computer Score: ${computerScore}`)
   gameOver(playerScore, computerScore)


function gameOver(playerScore, computerScore)  {
   (playerScore > computerScore) ? console.log("Congratulations! You Win! :)") :
   (playerScore < computerScore) ? console.log("You Lose! Nice Try!") :
   console.log("Fair Game, It's a Tie!");
}
game()
