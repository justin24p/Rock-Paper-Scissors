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
