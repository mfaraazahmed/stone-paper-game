let playerScore = 0;
let computerScore = 0;

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

function playRound(playerSelection, computerSelection, playerScore, computerScore){
    let updatePlayerScore = playerScore;
    let updateComputerScore = computerScore;
    console.log(playerSelection, computerSelection)
    if(playerSelection == 'rock' && computerSelection =='scissor' || playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'scissor' && computerSelection == 'paper'){
        console.log (updatePlayerScore = updatePlayerScore + 1, updateComputerScore);
    } else if(playerSelection == 'rock' && computerSelection == 'rock' || playerSelection == 'paper' && computerSelection == 'paper' || playerSelection == 'scissor' && computerSelection == 'scissor'){
        console.log (updatePlayerScore, updateComputerScore);
    } else if(playerSelection == 'scissor' && computerSelection == 'rock' || playerSelection == 'paper' && computerSelection == 'scissor' || playerSelection == 'rock' && computerSelection == 'paper'){
        console.log (updatePlayerScore ,updateComputerScore = updateComputerScore + 1);
    } else {
        console.log('invalid choice');
    }
}

const playerSelection = 'rock'
const computerSelection = getComputerSelection();
console.log(playRound(playerSelection, computerSelection, playerScore, computerScore))