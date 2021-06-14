function computerPlay (computerRoll = 3) {
    let randomNum = Math.floor(Math.random() * computerRoll); 
    (randomNum == 0) ? computerRoll = "Rock" :
    (randomNum == 1) ? computerRoll = "Scissors" :
    computerRoll = "Paper";
    return computerRoll;
} 
let score = {computer: 0, player: 0};
let roundNum = 0;
function keepScore (roundResults) {
   
   if (roundResults[2] == 'You Win!') {
      score['player'] += 1;
      addText('div.player p.player-score', score['player']);
   } 
   else if (roundResults[2] == 'You Lose!') {
      score['computer'] += 1;
      addText('div.computer p.computer-score', score['computer']);
   } 
   console.log(score);
   showResults(roundResults);
}
function showResults(roundResults) {  // Output the current score and you won, lost, or tied messages
      addText('div.roll h1.round-roll', `${roundResults[0]} versus ${roundResults[1]}`);
      addText('h1.round-num', `Round ${roundNum}/5`);

      if (score['computer'] + score['player'] == 5) {
         gameOver(roundResults[4], roundResults[3])
         return;
      }
}
function playRound(playerChoice = 'rock', computerChoice) {  // Compare computer's and user's choices to declare a winner
   let roundOver = (playerChoice == computerChoice) ? "It\'s a Tie!" :
   (playerChoice == "Paper" && computerChoice == "Rock") ||
   (playerChoice == "Scissors" && computerChoice == "Paper") ||
   (playerChoice == "Rock" && computerChoice == "Scissors") ? "You Win!"  :
   "You Lose!";
   roundNum++;

   keepScore([playerChoice, computerChoice, roundOver]);
}
   function createButtons(idName) {
      const playerButton = document.createElement('button');
      playerButton.id = idName;
      playerButton.textContent = idName;
      playerButton.classList.toggle('buttons-play');
      return playerButton;
   }
   function makeElements(appendTo, element, className, text) {
      let node = document.createElement(element);
      let parent = document.querySelector(appendTo);
      parent.append(node);
      if (className != null) {
         node.classList.add(className);
      }
      if (text != null) {
      addText(`${element}.${className}`, text);
   }
}
   function addText(element, text) {
      document.querySelector(element)
      .textContent = text;  
   }


   let container = document.createElement('main');
   document.body.append(container);


   makeElements('main', 'div', 'round');
   makeElements('div.round', 'h1', 'round-num', 'Round 0/5');

   let points = document.createElement('div');
   points.classList.add('score');
   document.body.append(points);
   makeElements('div.score', 'div', 'player');
   makeElements('div.player', 'h4', 'player-text', 'Player Score:')
   makeElements('div.player', 'p', 'player-score', '0');

   makeElements('main', 'div', 'roll');
   makeElements('div.roll', 'h1', 'round-roll', 'Player Vs. CPU');

   makeElements('main', 'div', 'winner');
   makeElements('div.winner', 'h1', 'round-data', 'You are a Winner :)');
   makeElements('div.winner', 'h3', 'retry', 'Retry?');
   makeElements('div.winner', 'button', 'yes', 'Yes');
   makeElements('div.winner', 'button', 'no', 'No');


   makeElements('div.score', 'div', 'computer');
   makeElements('div.computer', 'h4', 'computer-text', 'Computer Score:');
   makeElements('div.computer', 'p', 'computer-score', '0');



   let buttonsParent = document.createElement('div');
   buttonsParent.setAttribute('id', 'buttons');
   document.body.append(buttonsParent);

   buttonsParent.append(createButtons('Rock'));
   buttonsParent.append(createButtons('Paper'));
   buttonsParent.append(createButtons('Scissors'));
   
   /*
   const currentRoundScore = document.createElement('div');
   let showTotalScore = `Player Score: ${score['player']} Computer Score: ${score['computer']}`;
   currentRoundScore.textContent += showTotalScore;
   roundOutput.appendChild(currentRoundScore); */
   
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