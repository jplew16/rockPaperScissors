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

function game(playerScore = 0, computerScore = 0) { // Play a five round game keeping track of score
    const buttons = document.querySelectorAll('button')
    buttons.addEventListener('click', playRound(buttons.id))

       console.log(`Player Score : ${playerScore}
Computer Score: ${computerScore}`)

   }
   gameOver(playerScore, computerScore)


function gameOver(playerScore, computerScore)  {
   (playerScore > computerScore) ? console.log("Congratulations! You Win! :)") :
   (playerScore < computerScore) ? console.log("You Lose! Nice Try!") :
   console.log("Fair Game, It's a Tie!");
}
game()
