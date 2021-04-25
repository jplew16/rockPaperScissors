function computerPlay (computerRoll = 3) {
    let randomNum = Math.floor(Math.random() * computerRoll); 
    (randomNum == 0) ? computerRoll = "rock" :
    (randomNum == 1) ? computerRoll = "scissors" :
    computerRoll = "paper";
    return computerRoll;
} 
function keepScore (roundResults) {
   if (roundOutput.hasChildNodes()) {
      let lastRoundScore = document.getElementById('gameResults').lastElementChild.textContent;
      let lastPlayerScore = parseInt(lastRoundScore.charAt(14));
      let lastComputerScore = parseInt(lastRoundScore.charAt(32));

      if (roundResults[2] == 'wins over') { // Get the last round score and give the player or computer a point
      roundResults[4] = lastPlayerScore + 1;
      roundResults[3] = lastComputerScore;
   } 
   else if (roundResults[2] == 'loses to') {
      roundResults[4] = lastPlayerScore;
      roundResults[3] = lastComputerScore + 1;
   } 
   else if (roundResults[2] == 'ties with') {
      roundResults[4] = lastPlayerScore;
      roundResults[3] = lastComputerScore;
   }
} else if (!roundOutput.hasChildNodes()) {  // For the first round give scores to corresponding winner if any
      if (roundResults[2] == 'wins over') {
         roundResults[4] += 1;
      } else if (roundResults[2] == 'loses to') {
         roundResults[3] += 1;
      } else if (roundResults[2] == 'ties with') {
         roundResults[3] = 0;
         roundResults[4] = 0;
      }
   }
   showResults(roundResults);
}

function showResults(roundResults) {  // Output the current score and you won, lost, or tied messages
      console.log(roundResults);
      if (roundResults[3] + roundResults[4] == 5) {
         gameOver(roundResults[4], roundResults[3])
         return;
      }
      const currentRoundResult = document.createElement('p');
      currentRoundResult.textContent += `${roundResults[0]} ${roundResults[2]} ${roundResults[1]}`;
      roundOutput.appendChild(currentRoundResult);

      const currentRoundScore = document.createElement('p');
      let showTotalScore = `Player Score: ${roundResults[4]} Computer Score: ${roundResults[3]}`;
      currentRoundScore.textContent += showTotalScore;
      roundOutput.appendChild(currentRoundScore);
}
function playRound(playerChoice, computerChoice) {  // Compare computer's and user's choices to declare a winner
   let roundOver = (playerChoice == computerChoice) ? "ties with" :
   (playerChoice == "paper" && computerChoice == "rock") ||
   (playerChoice == "scissors" && computerChoice == "paper") ||
   (playerChoice == "rock" && computerChoice == "scissors") ? "wins over"  :
   "loses to";
   keepScore([playerChoice, computerChoice, roundOver, computerScore = 0, playerScore = 0]);
}
   function createButtons(idName) {
      const playerButton = document.createElement('button');
      playerButton.id = idName;
      playerButton.textContent = idName;
      playerButton.classList.toggle('buttons-play');
      return playerButton;
   }
   buttonsParent.append(createButtons('rock'));
   buttonsParent.append(createButtons('paper'));
   buttonsParent.append(createButtons('scissors'));
   let roundOutput = document.createElement('div');
   roundOutput.setAttribute('id', 'gameResults');
   document.body.appendChild(roundOutput);
   
   const btns = document.querySelectorAll('button')
   let sendChoice = function () {    // Send the player's choice through playRound
      playRound(this.id, computerPlay())
   };
   btns.forEach((button) => {
      button.addEventListener('click', sendChoice);
   });

function gameOver(playerScore, computerScore)  {
   const fifthRound = document.createElement('h2');
   if (playerScore < computerScore) {
      fifthRound.textContent = 'You Lose :('
   } else if (playerScore > computerScore) {
      fifthRound.textContent = 'You Win :)'
   }
   let endScore = document.createElement('p');
   endScore.textContent += `Final Scores: 
   Player Score: ${playerScore} Computer Score: ${computerScore}`;
   roundOutput.appendChild(fifthRound);
   roundOutput.appendChild(endScore);
}