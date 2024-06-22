//step 2 Write the logic to get the computer choice

function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let randomChoices = Math.floor(Math.random()*choices.length);
    return choices[randomChoices];
}
// console.log(getComputerChoice());

//step 3 Write the logic to get the human choice

function getHumanChoice(){
    let userInput = prompt("Let's play rock-paper-scissors and see if you can beat the bot! Please choose between rock, paper, or scissors.").toLowerCase().trim();
    while (userInput !== "rock" && userInput !== "paper" && userInput !== "scissors"){
        userInput = prompt("Invaid input, please choose between rock, paper, or scissors.").toLowerCase().trim();
    }
    return userInput;
}
// console.log(getHumanChoice());