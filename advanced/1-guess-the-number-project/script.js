let randomNumber = Math.floor(Math.random() * 100 + 1);
let finalEl = document.querySelector('.final-output');
let triesEl = document.querySelector('.Tries-output');
let numOfTries = 7;
let tries = 1;
triesEl.innerText = `You have ${numOfTries} tries`;
let inputEl = document.querySelector(".inputs-Values");
inputEl.value = '';

function guessNumber() {
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;
  if (guess < 1 || guess > 100 || guess.length === 0) {
    finalEl.innerText = 'Please enter a number between 1 and 100';
    triesEl.innerText = `You have ${numOfTries}`;
  }
  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  if (guess > randomNumber) {
    numOfTries--;
    tries++;
    triesEl.innerText = `You have ${numOfTries}`;
    finalEl.innerText = 'Number is too high, try again';
  }
  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
  if (guess < randomNumber) {
    numOfTries--;
    tries++;
    triesEl.innerText = `You have ${numOfTries}`;
    finalEl.innerText = 'Number is too low, try again';
  }
  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
  if (guess == randomNumber) {
    finalEl.innerText = 'Guess is correct. You win!';
    triesEl.innerText = `It took you ${tries} tries to get the number`;
  }
  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
  if (numOfTries === 0 && guess != randomNumber) {
    finalEl.innerText = `You lose, the number was ${randomNumber}`;
  }
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
let newBtn = document.querySelector('.btnNewGame');
newBtn.addEventListener('click', newGame)

function newGame() {
  randomNumber = Math.floor(Math.random() * 100 + 1);
  numOfTries = 7;
  tries = 1;
  inputEl.value = '';
  triesEl.innerText = `You have ${numOfTries} tries`;
  finalEl.innerText = 'Please enter a number between 1 and 100';
  //Your code here
  //Reset randomNumber
  //Reset users input field
  //Reset tries, and triesTaken by the user
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
