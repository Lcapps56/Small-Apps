const board = document.querySelector('.board')
const buttons = document.querySelectorAll('div span')
const winningSequences = [[0,1,2],[3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ]
let gameArray = [
    '_', '_', '_',
    '_', '_', '_',
    '_', '_', '_'
]
let currentPlayer = "X"
let checkStatus = () => {
    let winningArray = []
    winningSequences.forEach((sequence) => {
        // for(let i=0; i<3; i++){
        //     // if(gameArray[])
            // console.log(gameArray[sequence[0]])
            if (gameArray[sequence[0]] === "X" && gameArray[sequence[1]] ==="X" && gameArray[sequence[2]] === "X"){
                alert('game Over: X winds. Game restarting soon')
                setTimeout(() =>{
                    location.reload()
                },3000)
            } else if(gameArray[sequence[0]] === "O" && gameArray[sequence[1]] ==="O" && gameArray[sequence[2]] === "O"){
                alert('game Over: O winds. Game restarting soon')
                setTimeout(() =>{
                    location.reload()
                },3000)
     
            }
        // }
        // console.log(gameArray)
    })
 
}

let updateBoard = () => {
    for (let i=0; i<gameArray.length; i++){
        buttons[i].innerText = gameArray[i]
    }
    gameArray.forEach((item) => {
        buttons[gameArray.indexOf(item)].innerText = item
        
    })

    // checkStatus()
}


updateBoard()

board.addEventListener('click', (e) => {
    // if the click is on a button and the button is currently empty
    if(e.target.tagName === 'SPAN' && e.target.textContent === '_'){
        // put player guess into the span text
        gameArray[e.target.className] = currentPlayer
        // After a players turn, change the current Player
        if(currentPlayer === "X"){
            currentPlayer = "O"
        } else{
            currentPlayer = "X"
        }
        // check the game board
        updateBoard()
        checkStatus()
    }
})
 
