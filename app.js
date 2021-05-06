import { checkForMatch } from './utils.js';

// import functions and grab DOM elements
const guessButton = document.getElementById('guess-button');
const resultsDiv = document.getElementById('results');
const userGuess = document.getElementById('user-guess');
const matchesWon = document.getElementById('match-wins');
const guessCounterDiv = document.getElementById('guess-counter');


//console.log(guessButton);
//console.log(resultsDiv);
//console.log(userGuess);
// initialize state
let randomNumber = Math.ceil(Math.random() * 20);
let guessCounter = 4;
let currentGuess = 0;
let totalWins = 0;


// set event listeners to update state and DOM

guessButton.addEventListener('click', () => {
    if (checkForMatch(Number(userGuess.value), Number(randomNumber)) === 0){
        resultsDiv.textContent = 'Congrats you guess correctly!';
        guessCounter--;
        currentGuess++;
        totalWins++;
        guessCounterDiv.textContent = `Guess left: ${guessCounter} Total Guess: ${currentGuess}`;
        matchesWon.textContent = `Matches Won: ${totalWins}`;
        guessCounter = 4;
        randomNumber = Math.ceil(Math.random() * 20);   
    }
    else if (checkForMatch(Number(userGuess.value), Number(randomNumber)) === -1){
        resultsDiv.textContent = 'You guessed too low!';
        guessCounter--;
        currentGuess++;
        guessCounterDiv.textContent = `Guess left: ${guessCounter} Total Guess: ${currentGuess}`;
    }
    else if (checkForMatch(Number(userGuess.value), Number(randomNumber)) === 1){
        resultsDiv.textContent = 'You guessed too high!';
        guessCounter--;
        currentGuess++;
        guessCounterDiv.textContent = `Guess left: ${guessCounter} Total Guess: ${currentGuess}`;
    }
    if (guessCounter === 0){
        resultsDiv.textContent = 'You are a loser!';
        randomNumber = Math.ceil(Math.random() * 20);
        guessCounter = 4;
        guessCounterDiv.textContent = `Guess left: ${guessCounter} Total Guess: ${currentGuess}`;
    }
});
