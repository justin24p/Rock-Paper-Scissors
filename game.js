/// Computer Selection
function getcomputerchoice() {
    let choices = ["rock","paper","scissors"];
    let randomindex = Math.floor(Math.random() * 3);
    return choices[randomindex];
}

/// Player Selection 
function getplayerchoice() {
    let userchoice = prompt("Please enter a choice:");
    let lowerchoice = userchoice.toLowerCase();
    return lowerchoice;
}

/// Round Winner Selection 
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's A Tie";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win this! Rock beats Scissors";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win this! Scissors beats Paper";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win this! Paper beats Rock";
    }
    else {
        return "Computer Wins!";
    }
}

