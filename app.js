let playerScore = 0;
let computerScore = 0;
let round = 0;


function playRound(){

    let computerChoice ;
    let playerChoice ;

    // Random computer selection
    const randChoice = Math.ceil(Math.random() * 3);
    if(randChoice == 1){
        computerChoice = 'rock';
    } else if( randChoice == 2){
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissor';
    }

    // User manual selection
    // Get the data-value attribute of the clicked image
    const value = event.target.getAttribute('data-value');

    // Set userChoice to the corresponding number
    if (value === '1') {
        playerChoice = 'rock';
    } else if (value === '2') {
        playerChoice = 'paper';
    } else if (value === '3') {
        playerChoice = 'scissor';
    }
    console.log('user choice : '+playerChoice+', cup choice : '+computerChoice);

    // winning and loosing conditions
    if(
        playerChoice == 'rock' && computerChoice == 'scissor' ||
        playerChoice == 'paper' && computerChoice == 'rock' ||
        playerChoice == 'scissor' && computerChoice == 'paper'
    ) {
        console.log('player wins');
        playerScore = playerScore + 1;
    } else if (
        playerChoice == 'scissor' && computerChoice =='rock' ||
        playerChoice == 'rock' && computerChoice == 'paper' ||
        playerChoice == 'paper' && computerChoice == 'scissor'
    ) {
        console.log('cpu wins')
        computerScore = computerScore + 1;
    } else {
        console.log('draw');
    }

    console.log('player score : '+playerScore+', cpu score : '+computerScore);
    round = round + 1;

    console.log(round);

    if(round == 5){

        // Determine the winner after 5 rounds
        let result;
        if (playerScore > computerScore) {
            result = "You win!";
        } else if (computerScore > playerScore) {
            result = "CPU wins!";
        } else {
            result = "It's a tie!";
        }

        // Display the result
        const resultDiv = document.getElementById("result");
        resultDiv.innerText = result;


        round = 0;
        playerScore = 0;
        computerScore = 0;
    } else {
    // Clear the result display
    const resultDiv = document.getElementById("result");
    resultDiv.innerText = "";
  }
}
