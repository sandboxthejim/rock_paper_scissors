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

//step 4 Declare the players score variables
// let humanScore = 0;
// let computerScore = 0;



// step 5  Write the logic to play a single round
function playRound(humanChoice, computerChoice){

    if (humanChoice === computerChoice){
        console.log("It's a tie!");
        return "tie";
    }
    let result;
    if ((humanChoice === "rock" && computerChoice === "scissors")||
        (humanChoice === "paper" && computerChoice === "rock")||
        (humanChoice === "scissors" && computerChoice === "paper")){
            result = "win";
        } else {result = "lose"}

        if (result === "win"){
            console.log(`Awesome! Your ${humanChoice.at(0)+humanChoice.slice(1)} beats ${computerChoice.at(0)+computerChoice.slice(1)}.`);
            return "win";
        } else if (result === "lose"){
            console.log(`Unlucky! Your ${humanChoice.at(0)+humanChoice.slice(1)} was defeated by ${computerChoice.at(0)+computerChoice.slice(1)}.`);
            return "lose";
        }
}


//step 6 Write the logic to play the entire game

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5 ; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);


        if (result === "win"){
            humanScore++;
        } else if(result === "lose"){
            computerScore++;
        }
    }
    console.log(`Final scores: Human:${humanScore}, Computer: ${computerScore}`);
        }
        
playGame();