//let userInput = prompt('Rock, Paper or Scissors, let\'s go!'));

const rock = 0;
const paper = 1;
const scissors = 2;
let max = 3;
function getComputerChoice(max){
    return Math.floor(Math.random()*max);
}
if(getComputerChoice(max) == rock){
    console.log('Rock');
} else if (getComputerChoice(max) == paper){
    console.log('Paper');
} else {console.log('Scissors')};

