let playerScore = 0;
let computerScore = 0;
let updatedPlayerScore = 0;
let updatedComputerScore = 0;
const readlineSync = require('readline-sync');

function getComputerSelection(){
    let computerChoice = null;
    const randChoice = Math.ceil(Math.random() * 3);
    console.log(randChoice);
    if(randChoice == 1){
        computerChoice = 'rock';
    } else if(randChoice == 2){
        computerChoice = 'paper';
    } else if(randChoice == 3){
        computerChoice = 'scissor';
    }
    return computerChoice;
}

function getUserSelection(userChoice){
    if(userChoice == 1){
        userChoice = 'rock';
    } else if(userChoice == 2){
        userChoice = 'paper';
    } else if(userChoice == 3){
        userChoice = 'scissor';
    }
    return userChoice;
}

function playRound(userSelection, computerSelection){
    if(userSelection == 'rock' && computerSelection == 'sciccor' || userSelection == 'paper' && computerSelection == 'rock' || userSelection == 'scissor' && computerSelection == 'paper'){
        return 1;
    } else if(userSelection == 'scissor' && computerSelection == 'rock' || userSelection == 'rock' && computerSelection == 'paper' || userSelection == 'paper' && computerSelection == 'scissor'){
        return 0;      
    } else {
        return null;
    }
}

for(let i = 0; i < 5; i++){
    const computerSelection = getComputerSelection();
    let userChoice = readlineSync.question('enter 1 for rock\nenter 2 for paper\nenter 3 for scissor\n');
    const userSelection = getUserSelection(userChoice);
    let status = playRound(userSelection, computerSelection);
    if(status == 1){
        updatedPlayerScore = updatedPlayerScore + 1;
    } else if(status == 0){
        updatedComputerScore = updatedComputerScore + 1;
    } else {
        updatedComputerScore = updatedComputerScore;
        updatedPlayerScore = updatedPlayerScore;
    }  
}

playerScore = updatedPlayerScore;
computerScore = updatedComputerScore;

if(playerScore > computerScore){
    console.log('player wins');
} else if(computerScore > playerScore){
    console.log('player looses');
} else {
    console.log('draw');
}