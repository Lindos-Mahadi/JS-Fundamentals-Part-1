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

const secreteNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secreteNumber);
document.querySelector('.number').textContent = secreteNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '🧁 No Number';
  } else if (guess === secreteNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
  } else if (guess > secreteNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🌺 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
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
