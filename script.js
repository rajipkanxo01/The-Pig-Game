//selecting elements
const score1El = document.getElementById('score-1');
const score2El = document.getElementById('score-2');
const diceEl = document.querySelector('.dice');
const holdButton = document.querySelector('.btn-hold');
const rollButton = document.querySelector('.btn-roll');
const newGameButton = document.querySelector('.btn-new');
const player1El = document.querySelector('.player-1');
const player2El = document.querySelector('.player-2');

let score, activePlayer, currentScore, playing;

// reset game when new game button is placed
function resetGame() {
  //starting conditions
  score1El.textContent = 0;
  score2El.textContent = 0;
  diceEl.classList.add('hidden');

  score = [0, 0];
// 1 for player 1 and 2 for player 2
  activePlayer = 1;
  currentScore = 0;
  playing = true;

  // changing current score of both players
  document.getElementById('current-1').textContent = 0;
  document.getElementById('current-2').textContent = 0;

  player1El.classList.remove('player-winner');
  player2El.classList.remove('player-winner');
  player1El.classList.add('player-active');
  player2El.classList.remove('player-active')
}

resetGame();

// rolling dice
function rollDice() {
  if (playing) {
    // generating random number to be dice number
    const diceNumber = Math.ceil(Math.random() * 6);
    diceEl.classList.remove('hidden');

    // display random dice
    diceEl.src = `images/dice-${diceNumber}.png`;

    // change player if roll is 1
    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.getElementById(`current-${activePlayer}`).textContent = currentScore;
    } else {
      changePlayer();
    }
  }
}

rollButton.addEventListener('click', rollDice);


// change between player 1 and player 2 functionality
function changePlayer() {
  if (playing) {
    document.getElementById(`current-${activePlayer}`).textContent = 0;
    // active player value changes to 2 if current value is 1 and vice versa
    activePlayer = activePlayer === 1 ? 2 : 1;
    player1El.classList.toggle('player-active');
    player2El.classList.toggle('player-active');
    currentScore = 0;
  }
}

// add currentScore when hold button is clicked
function addScore() {
  if (playing) {
    score[activePlayer - 1] += currentScore;
    document.getElementById(`score-${activePlayer}`).textContent = score[activePlayer - 1];

    // checking if score is more than 100
    if (score[activePlayer - 1] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document.querySelector(`.player-${activePlayer}`).classList.add('player-winner');
      document.querySelector(`.player-${activePlayer}`).classList.remove('player-active');
    } else {
      changePlayer();
    }
  }
}

holdButton.addEventListener('click', addScore);
newGameButton.addEventListener('click', resetGame);
