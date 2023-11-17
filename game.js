/// Computer Selection
function getcomputerchoice() {
    let choices = ["rock","paper","scissors"];
    let randomindex = Math.floor(Math.random() * 3);
    return choices[randomindex];
}
// button logic 
let text = document.querySelector('p');

document.getElementById('rock').addEventListener('click', () => {
    playRound("rock", getcomputerchoice());
}); 

document.getElementById('paper').addEventListener('click', () => {
    playRound("paper", getcomputerchoice());
});

document.getElementById('scissors').addEventListener('click', () => {
    playRound("scissors", getcomputerchoice());
});

let player = document.querySelector(".playerScore");
let computer = document.querySelector(".computerScore");
let body = document.querySelector("body")
let playerNum = 0;
let computerNum = 0;
let overlay = document.getElementById("overlay");

/// Round Winner Selection 
function playRound(playerSelection, computerSelection) {
    console.log(playerSelection + " player");
    console.log(computerSelection + " computer");
    if (playerSelection === computerSelection) {
        text.textContent = "Its a tie"
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        text.textContent = "You Win this! Rock beats Scissors";
        playerNum += 1;
        player.textContent = playerNum.toString();
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        text.textContent = "You Win this! Scissors beats Paper";
        playerNum += 1;
        player.textContent = playerNum.toString();
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        text.textContent = "You Win this! Paper beats Rock";
        playerNum += 1;
        player.textContent = playerNum.toString();
    }
    else {
        text.textContent = "Computer Wins";
        computerNum += 1;
        computer.textContent = computerNum.toString();
    }
    if (playerNum === 5 || computerNum === 5) {
        overlay.style.display = "block";
        const gameEndDiv = document.createElement('div');
        const gameEndButton = document.createElement('button');
        const gameEndText = document.createElement('p');
        if (playerNum > computerNum) {
            gameEndText.textContent = "You Won :)"
        } else {
            gameEndText.textContent = "You Lose :("
        }
        gameEndButton.textContent = "Play Again"; 
        gameEndDiv.appendChild(gameEndButton)
        gameEndDiv.appendChild(gameEndText)
        overlay.appendChild(gameEndDiv);

        //restarts game 
        gameEndButton.addEventListener("click", () => {
            overlay.style.display = "none";
            playerNum = 0;
            computerNum = 0;
            computer.textContent = computerNum.toString();
            player.textContent = playerNum.toString();
        })

    } else {
        overlay.style.display = "none";
    }
}
