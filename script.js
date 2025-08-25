'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';
// document.querySelector('.number').textContent= 15;
// document.querySelector('.score').textContent=10;
// document.querySelector('.guess').value=23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  //WHEN THERE IS NO INPUT
  if (!guess) {
    //document.querySelector('.message').textContent = '⛔ No Input Number!';
    displayMessage('⛔ No Input Number!');
  }
  //WHEN THE GUESS IS RIGHT
  else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.fontSize = '8rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //WHEN GUESS IS WRONG
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? '📉 Too High!':'📈 Too low!';
      displayMessage(guess > secretNumber ? '📉 Too High!' : '📈 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '😭 You Lose!';
      displayMessage('😭 You Lose!');
      document.querySelector('.score').textContent = 0;
    }
  }

  //   //WHEN THE GUESS IS TOO HIGH
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉 Too High!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '😭 You Lose!';
  //       document.querySelector('.score').textContent = 0;
  //   }
  //   //WHEN GUESS IS TOO LOW
  //   else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈 Too low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '😭 You Lose!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

//TO RESET GAME
document.querySelector('.again').addEventListener('click', function () {
  //reset score
  score = 20;
  document.querySelector('.score').textContent = score;
  //reset secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  //reset guess box
  document.querySelector('.guess').value = '';
  //reset guess message
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  //reset background-color
  document.querySelector('body').style.backgroundColor = '#222';
});
