
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
    for (let i = 0; i < numberOfRows; i++) {
      let row = [];
      for(let j = 0; j < numberOfColumns; j++){
            row.push(null);
        };
            board.push(row);
  };
      return board;
};
let playerBoard = generatePlayerBoard(5,5);

// testing board
// console.log(generatePlayerBoard(5, 5));

const generateBombBoard = (numberOfRows, numberOfColumns, numberofBombs) => {
  let board = [];
    for (let i = 0; i < numberOfRows; i++) {
      let row = [];
      for(let j = 0; j < numberOfColumns; j++){
            row.push(null);
            };
            board.push(row);
          };
      let numberofBombsPlaced = 0;
      while (numberofBombsPlaced < numberofBombs) {
        let randomRowIndex = Math.floor((Math.random() * numberOfRows));
        let randomColumnIndex = Math.floor((Math.random() * numberOfColumns));
        if (board[randomRowIndex][randomColumnIndex] !== 'B'){
          board[randomRowIndex][randomColumnIndex] = 'B';
          numberofBombsPlaced++;
        } else {}
    }

      return board;
  };

const getNumberofSurroundingBombs = (bombBoard, flipRow, flipColumn) => {
  const offsets = [[-1,1],[-1,0],[-1,1],[0,-1],[0,1],[1, -1],[1,0],[1,1],];

  const numberOfRows = bombBoard.length;
  const numberOfColumns = bombBoard[0].length;

  let numberofSurroundingBombs = 0;

  offsets.forEach(offset => {
    const neighborRow = flipRow + offset[0];
    const neighborColumn = flipColumn + offset[1];
    if (neighborRow >= 0 && neighborRow < numberOfRows && neighborColumn >= 0 && neighborColumn < numberOfColumns) {

      if (bombBoard[neighborRow][neighborColumn] === 'B') {
        numberofSurroundingBombs++
      }
    }
  });
  return numberofSurroundingBombs;
};

const flipTile = (playerBoard, bombBoard, flipRow, flipColumn) => {
  if (playerBoard[flipRow][flipColumn] !== ' ') {
    console.log('Already flipped that tile!');
    return;
  } else if (bombBoard[flipRow][flipColumn] === 'B') {
    playerBoard[flipRow][flipColumn] = 'B';
  } else {
    playerBoard[flipRow][flipColumn] = getNumberofSurroundingBombs(bombBoard, flipRow, flipColumn)
  }
};

const printboard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
}
let bombBoard = generateBombBoard (3,3,2);

console.log('Players board:')
printboard(playerBoard);
console.log('Bomb Board:')
printboard(bombBoard);
flipTile(playerBoard,bombBoard,3,1);
console.log('Updated Player Board');
printboard(playerBoard);
