console.log("welcome to tic tac toe")
let music = new Audio("./assets/music.mp3")
let move = new Audio("./assets/ting.mp3")
let gameover = new Audio("./assets/gameover.mp3")

let gameoverFlag = false

//intial turn

let turn = "x"


//function to change turn
const changeTurn = () => {
    return turn === "x" ? "0" : "x";
}


//function to check  for a win.

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && boxtext[e[0]].innerText !== "") {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won";
            gameoverFlag = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
        }

    })
}

// core game logic.

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', (e) => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            move.play();
            checkWin();
            if (!gameoverFlag) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})