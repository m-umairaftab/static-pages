console.log(`Welcome to Tic Tac Toe`);
let music = new Audio('./tic tac toe/music.mp3');
let audioTurn = new Audio('./tic tac toe/ting.mp3');
let gameOver = new Audio('./tic tac toe/gameover.mp3');
let turn = 'X';
let isGameOver = false;
//function to change turn
const changeTurn = () => {
    return turn === 'X' ? '0' : 'X';
}

// function to check for a win
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxText');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 5, 15],
        [6, 7, 8, 5, 15, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135]
    ];
    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) &&
            (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) &&
            boxtexts[e[0]].innerText !== '') {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + '  Won';
            isGameOver = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '200px';
            document.querySelector('.line').style.width = '20vw';
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            gameOver.play();
        }
    })
}

// Game logic
music.play();
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxText');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isGameOver) {
                document.getElementsByClassName('info')[0].innerText = 'Turn for ' + turn;
            }
        }
    });
});

// Add onclick on reset button
reset.addEventListener('click', () => {
    let boxText = document.querySelectorAll('.boxText');
    Array.from(boxText).forEach(element => {
        element.innerText = '';
    });
    turn = 'X';
    isGameOver = false;
    document.getElementsByClassName('info')[0].innerText = 'Turn for ' + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '0px';
    document.querySelector('.line').style.width = '0vw';
});  