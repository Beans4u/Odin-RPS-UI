// @ts-check


// DOM DECLARATIONS
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const gameStatusText = document.getElementById('game-status');
const currentScore = document.getElementById('current-score');
const buttons = document.getElementById('buttons');

// INTERNAL DECLARATIONS
let computerSelection = "";
let playerSelection = "";
let computerScore = 0;
let playerScore = 0;

// EVENTS
rock.addEventListener("click", () => playerPlay("rock"));
paper.addEventListener("click", () => playerPlay("paper"));
scissors.addEventListener("click", () => playerPlay("scissors"));


// PLAYER TURN
function playerPlay(move) {
    console.log(move);
    playerSelection = move;
    computerPlay();
    playRound();
    
    if(computerScore == 3 || playerScore ==3){
    announceWinner();
    }
}

// COMPUTER TURN
function computerPlay() {
    gameStatusText.innerHTML = "choosing computer play";

    let computerRoll = Math.floor(Math.random() * 3);

    switch (computerRoll) {
        case 0:
            computerSelection = "rock";
            break;
        case 1:
            computerSelection = "paper";
            break;
        case 2:
            computerSelection = "scissors";
            break;
    }

    return gameStatusText.innerHTML = `Computer chose ${computerSelection}`;
}

function playRound() {

    console.log(computerSelection);
    console.log(playerSelection);

    if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        gameStatusText.innerHTML = "You Lose! Paper beats Rock";
        currentScore.innerHTML = `Computer: ${computerScore} <br> Player: ${playerScore}`;

    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        gameStatusText.innerHTML = "You Win! Rock beats Scissors";
        currentScore.innerHTML = `Computer: ${computerScore} <br> Player: ${playerScore}`;

    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        gameStatusText.innerHTML = "You Win! Paper beats rock";
        currentScore.innerHTML = `Computer: ${computerScore} <br> Player: ${playerScore}`;

    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        gameStatusText.innerHTML = "You Lose! Scissors beats Paper";
        currentScore.innerHTML = `Computer: ${computerScore} <br> Player: ${playerScore}`;

    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        gameStatusText.innerHTML = "You Lose! Rock beats Scissors";
        currentScore.innerHTML = `Computer: ${computerScore} <br> Player: ${playerScore}`;

    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        gameStatusText.innerHTML = "You Win! Scissors beats Paper";
        currentScore.innerHTML = `Computer: ${computerScore} <br> Player: ${playerScore}`;

    } else {
        gameStatusText.innerHTML = "Draw! Try again.";
    }
}

function announceWinner(){
    if (playerScore == 3){
        gameStatusText.innerHTML = "You're the first to three wins! You won the game! <br> Press F5 to play again.";
        // gameStatusText.style.color = 'green';
        buttons.style.display = 'none';
        
    }
    else if (computerScore == 3){
        gameStatusText.innerHTML = "The computer is the first to three wins! You lose the game! <br> Press F5 to play again.";
        // gameStatusText.style.color = 'maroon';
        buttons.style.display = 'none';
    }
}