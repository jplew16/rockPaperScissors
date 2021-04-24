function computerPlay (computerRoll = 3) {
    let randomNum = Math.floor(Math.random() * computerRoll); 
    (randomNum == 0) ? computerRoll = "rock" :
    (randomNum == 1) ? computerRoll = "scissors" :
    computerRoll = "paper";
    return computerRoll;
} 
function keepScore (roundResults) {
   if (roundOutput.hasChildNodes()) {
      if (roundResults[2] == 'wins over') {
      let lastRoundScore = document.querySelector('p').lastElementChild.textContent;
      let lastPlayerScoreIndex = lastRoundScore.charAt(14);
      roundResults[4] = lastPlayerScoreIndex + 1;
   } else if (roundResults[2] == 'loses to') {
      roundResults[3] += 1;
   } else {

   } if (roundResults[2] == 'wins over') {
      roundResults[4] += 1;
   } else if (roundResults[2] == 'loses to') {
      roundResults[3] += 1;
   }
}
   showResults(roundResults);
}

function showResults(roundResults) {
      console.log(roundResults);
      roundOutput.classList.add('content');
      const currentRound = document.createElement('p');
      let showTotalScore = 'Player Score: ' + roundResults[4] + ' Computer Score: ' + roundResults[3];
      currentRound.textContent += `${roundResults[0]} ${roundResults[2]} ${roundResults[1]}`;
      currentRound.textContent += showTotalScore;
      roundOutput.appendChild(currentRound);
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
      playerButton.dataset.playerScore = 0
      playerButton.dataset.cpuScore = 0;
      playerButton.textContent = idName;
      playerButton.classList.toggle('buttons-play');
      return playerButton;
   }
   buttonsParent.append(createButtons('rock'));
   buttonsParent.append(createButtons('paper'));
   buttonsParent.append(createButtons('scissors'));
   buttonsParent.setAttribute('data-player-score', 0);
   buttonsParent.setAttribute('data-cpu-score', 0);
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

      console.log(`Player Score : ${playerScore}
Computer Score: ${computerScore}`)
   gameOver(playerScore, computerScore)


function gameOver(playerScore, computerScore)  {
   (playerScore > computerScore) ? console.log("Congratulations! You Win! :)") :
   (playerScore < computerScore) ? console.log("You Lose! Nice Try!") :
   console.log("Fair Game, It's a Tie!");
}