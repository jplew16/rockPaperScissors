function computerPlay (computerRoll = 3) {
    let randomNum = Math.floor(Math.random() * computerRoll); 
    (randomNum == 0) ? computerRoll = "Rock" :
    (randomNum == 1) ? computerRoll = "Scissors" :
    computerRoll = "Paper";
    return computerRoll;
} 
let score = {computer: 0, player: 0};
function keepScore (roundResults) {
      if (roundResults[2] == 'wins over') {
      score['player'] += 1;
   } 
   else if (roundResults[2] == 'loses to') {
      score['computer'] += 1;
   } 
   showResults(roundResults);
}
function showResults(roundResults) {  // Output the current score and you won, lost, or tied messages
      console.log(roundResults);
      if (score['computer'] + score['player'] == 5) {
         gameOver(roundResults[4], roundResults[3])
         return;
      }
      currentRound.textContent = `${roundResults[0]} ${roundResults[2]} ${roundResults[1]}`;
}
function playRound(playerChoice = 'rock', computerChoice) {  // Compare computer's and user's choices to declare a winner
   let roundOver = (playerChoice == computerChoice) ? "It\'s a Tie!" :
   (playerChoice == "Paper" && computerChoice == "Rock") ||
   (playerChoice == "Scissors" && computerChoice == "Paper") ||
   (playerChoice == "Rock" && computerChoice == "Scissors") ? "You Win!"  :
   "You Lose!";
   roundNum++;

   addText('p.player-choice', playerChoice);
   addText('p.computer-choice', computerChoice);
   addText('h1.round-data', roundOver);
   addText('h1.round-num', `Round ${roundNum}/5`);
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
      node.classList.toggle(className);
      parent.append(node);
      if (text != null) {
         addText(`${element}.${className}`, text);
      }
   }
   function addText(element, text) {
      document.querySelector(element)
      .textContent = text;  
   }
   let roundNum = 0;

   let parent = document.createElement('main');
   document.body.append(parent);

   makeElements('main', 'div', 'results');

   makeElements('div.results', 'h1', 'round-data', '');
   makeElements('div.results', 'h1', 'round-num', 'Round 0/5');
   makeElements('div.results', 'div', 'players');
   makeElements('div.players', 'h4', 'player', 'Player:');
   makeElements('div.players', 'h4', 'computer', 'Computer:');
   
   makeElements('div.players', 'p', 'player-choice');
   makeElements('div.players', 'p', 'computer-choice');


   let buttonsParent = document.createElement('div');
   buttonsParent.setAttribute('id', 'buttons');
   parent.append(buttonsParent);

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