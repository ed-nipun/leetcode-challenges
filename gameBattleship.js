var readlineSync = require("readline-sync");

var userName = readlineSync.question("Enter player name: ");

console.log(`welcome ${userName}`);

const board = [];

const rowCount = 3;
const columnCount = 3;

for (let i = 0; i < rowCount; i++) {
  board.push([]);

  for (let j = 0; j < columnCount; j++) {
    board[i].push("-");
  }
}

for (let i = 0; i < rowCount; i++) {
  console.log(board[i]);
}

const maxGuess = 3;

let remainingGuess = maxGuess;

while (remainingGuess > 0) {
  console.log(`guess remaining: ${remainingGuess}`);

  var nextMove = readlineSync.question("Enter your next Move: ").split(" ");

  let rowGuess = +nextMove[0];
  let colGuess = +nextMove[1];

  console.log(`row: ${rowGuess} and col: ${colGuess}`);

  for (let i = 0; i < rowCount; i++) {
    console.log(board[i]);
  }

  remainingGuess--;
}
