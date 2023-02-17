let playerScore = 0;
let computerScore = 0;
let updatedPlayerScore = 0;
let updatedComputerScore = 0;
let userPick = null;
let computerChoice = null;
let userChoice = null;

function getComputerSelection(){
    const randChoice = Math.ceil(Math.random() * 3);
    console.log(randChoice);
    if(randChoice == 1){
        computerChoice = 'rock';
    } else if(randChoice == 2){
        computerChoice = 'paper';
    } else if(randChoice == 3){
        computerChoice = 'scissor';
    }
    console.log(computerChoice)
    return computerChoice;
}

function getUserSelection(){
    document.getElementById('options').addEventListener("click", function(event){
    if(event.target.tagName === "img"){
        userChoice = parseInt(event.target.getAttribute("data-value"));
        console.log(userChoice);
    }
    })
    if(userChoice == 1){
        userPick = 'rock';
    } else if(userChoice == 2){
        userPick = 'paper';
    } else if(userChoice == 3){
        userPick = 'scissor';
    }
    console.log(userPick)
    return userPick;
}

function playRound(){
    const computerSelection = getComputerSelection();
    const userSelection = getUserSelection();
    if(userSelection == 'rock' && computerSelection == 'sciccor' || userSelection == 'paper' && computerSelection == 'rock' || userSelection == 'scissor' && computerSelection == 'paper'){
        return 1;
    } else if(userSelection == 'scissor' && computerSelection == 'rock' || userSelection == 'rock' && computerSelection == 'paper' || userSelection == 'paper' && computerSelection == 'scissor'){
        return 0;      
    } else {
        return null;
    }
}

for(let i = 0; i < 5; i++){
    let status = playRound();
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

var textElement = document.createElement("p");
if(playerScore > computerScore){
    var displayText = 'player wins';
} else if(computerScore > playerScore){
    var displayText = 'player looses';
} else {
    var displayText = 'draw';
}
textElement.textContent = displayText;
document.getElementById("textContainer").appendChild(textElement);
