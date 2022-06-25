'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 10;
console.log(document.querySelector('.guess').value);
*/

// REAL PROGRAM IS GOING TO START
//  PROJECT ONE GUESS SECRETE NUMBER

let secreteNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secreteNumber);
// document.querySelector('.number').textContent = secreteNumber;

let score = 20;
document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '🧁 No Number';

    // When player is wins
  } else if (guess === secreteNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('.number').textContent = secreteNumber;

    // CSS STYLE
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // When guess is too high
  } else if (guess > secreteNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🌺 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  } else if (guess < secreteNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🧮 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//JavaScript in the Browser: DOM and Events

//Coding Challenge #1

//Implement a game rest functionality, so that the player can make a new guess!
//Your tasks:
//1. Select the element with the 'again' class and attach a click event handler
//2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables
//3. Restore the initial conditions of the message, number, score and guess input fields
//. Also restore the original background color (#222) and number width (15rem)

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secreteNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start Guessing';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '';

  // CSS STYLE
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
