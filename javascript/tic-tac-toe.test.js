
const X = 1;
const O = 2;
const _ = 0;
const unfinished = -1;

const winningCombinations = [
[1, 2, 3],[4, 5, 6],[7, 8, 9],
[1, 4, 7],[2, 5, 8],[3, 6, 9],
[1, 5, 9],[3, 5, 7]
];

function isSolved(board) {
    let boardPosition = 0;
    const game = {
        playerOnePositions: [],
        playerTwoPositions: [],
        unPicked: []
    }

    board.forEach(row => {
        for (let i = 0; i < row.length; i++) {
            boardPosition++
            if (row[i] === X) {
                game.playerOnePositions.push(boardPosition);
            } else if (row[i] === O) {
                game.playerTwoPositions.push(boardPosition);
            } else {
                game.unPicked.push(boardPosition)
            }
        }
    })

    
    if( winningCombinations.some(combo => combo.every(item => game.playerOnePositions.includes(item)))) {
        console.log("player one wins")
        return X;
    } else if (winningCombinations.some(combo => combo.every(item => game.playerTwoPositions.includes(item)))) {
        console.log('player two wins')
        return O;
    }
    
    return game.unPicked.length > 0 ? unfinished : _;
}
