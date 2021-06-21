function computerPlay (computerRoll = 3) {
let randomNum = Math.floor(Math.random() * computerRoll); 
(randomNum == 0) ? computerRoll = "Rock" :
(randomNum == 1) ? computerRoll = "Scissors" :
    computerRoll = "Paper";
    return computerRoll;
   } 
   let score = {'player': 0, 'computer': 0};
   let round = 0;
   function keepScore (roundResults) {
   if (roundResults[0] == 'You Win!') {
      score['player'] += 1;
   } 
   else if (roundResults[0] == 'You Lose!') {
      score['computer'] += 1;
   } 
   addText('div.player p.player-score', score['player']);
   addText('div.computer p.computer-score', score['computer']);
   console.log(roundResults);
   showResults(roundResults);
}
function showResults(roundResults) {  // Output the current score and you won, lost, or tied messages
      addText('div.roll h1.round-roll', `${roundResults[1]} Vs. ${roundResults[2]}`);
      addText('h1.round-num', `Round ${round}/5`);

      if (round == 0 || round == 5) {
         if (score['player'] > score['computer']) {
            addText('#winner h1', 'You Win!');
         }
         else if (score['player'] < score['computer']) {
            addText('#winner h1', 'You Lose!');
         }
         else {
            addText('#winner h1', 'It\'s a Tie!');
         }
         togglePopup();
      }
}

function playRound(playerChoice = 'rock', computerChoice) {  // Compare computer's and user's choices to declare a winner
   let roundOver = (playerChoice == computerChoice) ? "It\'s a Tie!" :
   (playerChoice == "Paper" && computerChoice == "Rock") ||
   (playerChoice == "Scissors" && computerChoice == "Paper") ||
   (playerChoice == "Rock" && computerChoice == "Scissors") ? "You Win!"  :
   "You Lose!";
   round++;
   keepScore([roundOver, playerChoice, computerChoice]);
}
function togglePopup() {
   let overlay = document.getElementById('winner');
   let popup = document.getElementById('overlay');
   overlay.classList.toggle('active');
   popup.classList.toggle('active');
}

function createButtons(idName) {
   const playerButton = document.createElement('button');
   playerButton.id = idName;
   playerButton.classList.toggle('buttons-play');
   
   //Create a container for both the image and button
   makeElements('#buttons', 'div', `${idName}-parent`); 
   const buttonsParent = document.querySelector(`#buttons div.${idName}-parent`);
   
   //Create and nest image
   makeElements(`#buttons div.${idName}-parent`, 'img');
   const image = document.querySelector(`div.${idName}-parent img`);
   image.setAttribute('src', `${idName}.jpg`);
   
   buttonsParent.append(playerButton);
   
   makeElements(`#buttons div.${idName}-parent`, 'p', `${idName}-text`, `${idName}`);
   
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

makeElements('main', 'div', 'roll');
makeElements('div.roll', 'h1', 'round-roll', 'Player Vs. CPU');

makeElements('main', 'div');
const endOverlay = document.querySelector('main div:nth-child(3)');
endOverlay.setAttribute('id', 'overlay');
makeElements('main', 'div');
const endPopup = document.querySelector('main div:nth-child(4)');
endPopup.setAttribute('id', 'winner');

makeElements('#winner', 'h2', 'game-over', 'Five Round Limit Reached')
makeElements('#winner', 'h2', 'thanks', 'Thanks for playing :)')
makeElements('#winner', 'h1', 'round-data', 'You are a Winner');
makeElements('#winner', 'button', 'retry', 'Retry');

let scoring = document.createElement('section');
document.body.append(scoring);

makeElements('section', 'div', 'score');
makeElements('div.score', 'div', 'player');
makeElements('div.player', 'h4', 'player-text', 'Player Score:')
makeElements('div.player', 'p', 'player-score', '0');
makeElements('div.score', 'div', 'computer');
makeElements('div.computer', 'h4', 'computer-text', 'Computer Score:');
makeElements('div.computer', 'p', 'computer-score', '0');

const buttons = document.createElement('nav');
buttons.setAttribute('id','buttons');
document.body.append(buttons);
createButtons('Rock');
createButtons('Paper');
createButtons('Scissors');

const btns = document.querySelectorAll('button.buttons-play');
// Send the player's choice through playRound
let sendChoice = function () { 
   playRound(this.id, computerPlay())
};
btns.forEach((button) => {
   button.addEventListener('click', sendChoice);
});
const retry = document.querySelector('button.retry');
retry.addEventListener('click', () => {
   score['player'] = 0;
   score['computer'] = 0;
   round = 0;
   keepScore([null, 'Player', 'CPU']);
});