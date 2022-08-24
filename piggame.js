var scores, roundScore, activePlayer, dice, gameIsPlaying;
begin();


document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gameIsPlaying) {
        var dice = Math.floor(Math.random() * 6) + 1;
    var dicePng = document.querySelector('.dice-image');
    dicePng.style.display = 'block';
    dicePng.src = 'images/dice-' + dice + '.png';

    if (dice !== 1) {
        roundScore += dice;
        document.querySelector('#player-no-' + activePlayer).textContent = roundScore;
    } else {
        nextPlayer();
    }
    }
    
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gameIsPlaying) {
        scores[activePlayer] += roundScore;
        document.querySelector('#player-score-' + activePlayer).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 100) {
            document.querySelector('#player-name-' + activePlayer).textContent = 'you win!';
            document.querySelector('.dice-image').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-box').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-box').classList.remove('player-active'); 
            gameIsPlaying = false;
        } else {
            nextPlayer();
        }
    }
    
});


function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('player-no-0').textContent = '0';
    document.getElementById('player-no-1').textContent = '0'; 
    document.querySelector('.player-0-box').classList.toggle('player-active');
    document.querySelector('.player-1-box').classList.toggle('player-active');

    document.querySelector('.dice-image').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', begin);

function begin() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gameIsPlaying = true;
    document.querySelector('.dice-image').style.display = 'none';
    document.getElementById('player-score-0').textContent = 0;
    document.getElementById('player-score-1').textContent = 0;
    document.getElementById('player-no-0').textContent = 0;
    document.getElementById('player-no-1').textContent = 0;
    document.getElementById('player-name-0').textContent = 'player 1';
    document.getElementById('player-name-1').textContent = 'player 2';
    document.querySelector('.player-0-box').classList.remove('winner');
    document.querySelector('.player-1-box').classList.remove('winner');
    document.querySelector('.player-0-box').classList.remove('player-active');
    document.querySelector('.player-1-box').classList.remove('player-active');
    document.querySelector('.player-0-box').classList.add('player-active');
};