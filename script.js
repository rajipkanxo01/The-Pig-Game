//selecting elements
const score1El = document.getElementById('score-1');
const score2El = document.getElementById('score-2');
const diceEl = document.querySelector('.dice');
const holdButton = document.querySelector('.btn-hold');
const rollButton = document.querySelector('.btn-roll');
const newGameButton = document.querySelector('.btn-new');
const currentScore1El = document.getElementById('current-1');
const currentScore2El = document.getElementById('current-2');
const player1El = document.querySelector('.player-1');
const player2El = document.querySelector('.player-2');


//starting conditions
score1El.textContent = 0;
score2El.textContent = 0;
diceEl.classList.add('hidden');


const score = [0,0];
// 1 for player 1 and 2 for player 2
let activePlayer = 1;
let currentScore = 0;





// rolling dice
function rollDice() {
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

rollButton.addEventListener('click', rollDice);


// change between player 1 and player 2 functionality
function changePlayer() {
    document.getElementById(`current-${activePlayer}`).textContent = 0;
    currentScore = 0;
    // active player value changes to 2 if current value is 1 and vice versa
    activePlayer = activePlayer === 1 ? 2 : 1;
    player1El.classList.toggle('player-active');
    player2El.classList.toggle('player-active');
}

holdButton.addEventListener('click', changePlayer);


// add scoring