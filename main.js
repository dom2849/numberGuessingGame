const numberOfGuesses = 3;
let remainingNumberOfGuesses = numberOfGuesses;
const upperBound = 100;
const winningNumber = generateRandomNumberBetween1And(upperBound);

setUpGame();
function setUpGame(){
    displayInstructions(upperBound);
    displayNumberOfGuesses(numberOfGuesses);
}

function displayInstructions(upperBound){
    let gameInstructions = document.querySelector('.game__instructions');
    gameInstructions.textContent = `Guess a number between 1 and ${upperBound}`
}

function displayNumberOfGuesses(numberOfGuesses){
    let gameFeedback = document.querySelector('.game__feedback');
    gameFeedback.textContent = `You have ${numberOfGuesses} guesses`
}

function generateRandomNumberBetween1And(upperBound){
    return Math.floor(Math.random()*upperBound + 1);
}