//step 2 write the logic to get the computer choice

function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let randomChoices = Math.floor(Math.random()*choices.length);
    return choices[randomChoices];
}
// console.log(getComputerChoice());