const player1 = document.querySelector('.player-1').classList;
const player2 = document.querySelector('.player-2').classList;



// change between player 1 and player 2
function changePlayer() {
    player1.contains('player-active') ? player1.remove('player-active')
        : player1.add('player-active');
    player2.contains('player-active') ? player2.remove('player-active')
        : player2.add('player-active');
}

document.querySelector('.btn--hold').addEventListener('click', changePlayer);