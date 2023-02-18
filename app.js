let playerScore = 0;
let computerScore = 0;
let round = 0;

function playRound(){

    let computerChoice ;
    let playerChoice ;

    // Display images and options when round is > 0
    const options = document.getElementById('images');
    options.style.display = 'flex';

    // Random computer selection
    const randChoice = Math.ceil(Math.random() * 3);

    // Update the computer images based on the selected options
    const computerImg = document.getElementById("computer-img");
    if(randChoice == 1){
        computerChoice = 'rock';
        computerImg.src = 'rock.png';
    } else if( randChoice == 2){
        computerChoice = 'paper';
        computerImg.src = 'paper.png';
    } else {
        computerChoice = 'scissor';
        computerImg.src = 'scissor.png';
    }

    // User manual selection
    // Get the data-value attribute of the clicked image
    const value = event.target.getAttribute('data-value');

    // Update the player images based on the selected options
    const playerImg = document.getElementById("player-img");

    // Set userChoice to the corresponding number
    if (value === '1') {
        playerChoice = 'rock';
        playerImg.src = 'rock.png';
    } else if (value === '2') {
        playerChoice = 'paper';
        playerImg.src = 'paper.png';
    } else if (value === '3') {
        playerChoice = 'scissor';
        playerImg.src = 'scissor.png';
    }
    console.log('user choice : '+playerChoice+', cup choice : '+computerChoice);

    playerImg.style.display = 'block';
    computerImg.style.display = 'block';
    
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

    // Display scores
    const scoreDiv = document.getElementById('score');
    scoreDiv.innerText = 'Player score : '+playerScore+'\nComputer score : '+computerScore;

    console.log(round);

    if(round == 5){

        // Determine the winner after 5 rounds
        let result;
        if (playerScore > computerScore) {
            result = "You win!";
            document.body.classList.add('winner');
        } else if (computerScore > playerScore) {
            result = "Thanos wins!";
            document.body.classList.add('lost');
        } else {
            result = "It's a tie!";
        }

        // enabling the btn
        var resetBtn = document.getElementById("reset-btn");
        resetBtn.disabled = false;

        // Display the result
        const resultDiv = document.getElementById("result");
        resultDiv.innerText = result;


        round = 0;
        playerScore = 0;
        computerScore = 0;
    } else {
    // Clear the result display
    document.body.classList.remove('winner');
    document.body.classList.remove('lost');
    const resultDiv = document.getElementById("result");
    resultDiv.innerText = "";
  }
}

// Refresh or resetting the game
// Get the reset button element
var resetBtn = document.getElementById("reset-btn");
// Add an event listener to the reset button
resetBtn.addEventListener("click", function() {
  // Reload the current webpage
    location.reload();
});

