function computerPlay (cpuRoll) {
    let cpuChoice = Math.floor(Math.random() * cpuRoll);
     (cpuChoice == 0) ? cpuChoice = "rock" :
     (cpuChoice == 1) ? cpuChoice = "scissors" :
     cpuChoice = "paper";
     return cpuChoice;
}
computerPlay(3) // 0 is rock, 1 is scissors, 2 is paper

function playRound(playerChoice, cpuChoice) {
    (playerChoice == cpuChoice) ? "ties with" :
    (playerChoice == "paper" && cpuChoice == "rock") ? "wins over" :
    (playerChoice == "rock" && cpuChoice == "paper") ? "loses to" :
    (playerChoice == "scissors" && cpuChoice == "paper") ?  "wins over" :
    (playerChoice == "paper" && cpuChoice == "scissors") ? "loses to" :
    "Please enter rock, paper, or scissors";
    
}