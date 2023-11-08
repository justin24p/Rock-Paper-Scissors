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

// Determine Winner
function game() {
    let computercount = 0;
    let playercount = 0;
    for (let i = 0; i < 5; i++) {
        let ComputerSelection = getcomputerchoice();
        let PlayerSelection = getplayerchoice();
        let roundResult = playRound(ComputerSelection, PlayerSelection);
        console.log(roundResult);

        if (roundResult === "You Win this! Rock beats Scissors" || 
            roundResult === "You Win this! Scissors beats Paper" || 
            roundResult === "You Win this! Paper beats Rock") {
            computercount++;
        } else if (roundResult === "Computer Wins!") {
            playercount++;
        }
    }   

    if (computercount > playercount) {
        console.log("Computer Wins Game!");
    } else if (playercount > computercount) {
        console.log("Player Wins Game!");
    } else {
        console.log("It's a tie");
    }
}

game(); // This line will actually execute the game function