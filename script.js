function computerPlay (computerRoll = 3) {
     let randomNum = Math.floor(Math.random() * computerRoll);
     (randomNum == 0) ? computerRoll = "rock" :
     (randomNum == 1) ? computerRoll = "scissors" :
     computerRoll = "paper";
     return computerRoll;
} 


function keepScore(roundOver, computerScore, playerScore) {
    if (roundOver == "wins over") {
        playerScore++ 
        return playerScore;
    } else if (roundOver == "loses to") {
        computerScore++;
        return computerScore;
    }
}
function playRound(playerChoice, computerChoice) {
    let roundOver = (playerChoice == computerChoice) ? "ties with" :
    (playerChoice == "paper" && computerChoice == "rock") ? "wins over"  :
    (playerChoice == "rock" && computerChoice == "scissors") ? "wins over"  :
    (playerChoice == "scissors" && computerChoice == "rock") ? "loses to"  :
    (playerChoice == "rock" && computerChoice == "paper") ? "loses to" :
    (playerChoice == "scissors" && computerChoice == "paper") ?  "wins over" :
    (playerChoice == "paper" && computerChoice == "scissors") ? "loses to" :
    "Either rock, paper, or scissors was not entered";
    
    console.log(`${playerChoice} ${roundOver} ${computerChoice}`)
    return roundOver;
}

function game(playerScore = 0, computerScore = 0) {
    for (i = 1; i <= 5; i++) {
        let roundWinner = playRound(
            prompt(`Round ${i}: Please type: Rock, Paper, or Scissors?`).toLowerCase(),
            computerPlay(),
        )
        if (roundWinner == "wins over") { 
            playerScore++ 
        }
        else if (roundWinner != "ties with") { 
            computerScore++ 
        }
        console.log(`Player Score : ${playerScore}
Computer Score: ${computerScore}`)

    }
    gameOver(playerScore, computerScore)
}

function gameOver(playerScore, computerScore)  {
    (playerScore > computerScore) ? console.log("Congratulations! You Win! :)") :
    (playerScore < computerScore) ? console.log("You Lose! Nice Try!") :
    console.log("Fair Game, It's a Tie!");
}
game()
