var readlineSync = require("readline-sync");

// Wait for user's response.
var userName = readlineSync.question("May I have your name? ");
console.log("Hi " + userName + "!");

const board = [];

const arrCount = 3;
const strCount = 3;

const randomEnd = 3;

const shipRow = Math.floor(Math.random() * randomEnd);

const shipCol = Math.floor(Math.random() * randomEnd);

for (let i = 0; i < arrCount; i++) {
  board.push([]);

  for (let j = 0; j < strCount; j++) {
    board[i].push(" ");
  }
}

for (let i = 0; i < arrCount; i++) {
  console.log(board[i]);
}

// hari dan board eka nam view wenawa. dan mata ona user ge guesses 3 k ganna

const maxGuesses = 3;

let currentGuess = maxGuesses;

while (currentGuess > 0) {
  console.log(`Guesses remaining: ${currentGuess}`);
  var userGuess = readlineSync.question("Enter your next move: ");

  // ok we can get the user input by number

  const guessArray = userGuess.split(" ");

  // dan api guess array eke index wena karagamu row ekai col ekai widihata

  const rowGuess = +guessArray[0];
  const colGuess = +guessArray[1];

  // dan api e sthanaya board eke mark karanna ona
  board[rowGuess][colGuess] = "X";

  // balamu user hariyatama ship ekata hit kalada kiyala
  if (shipRow === rowGuess && shipCol === colGuess) {
    console.log("YOU WON!!");

    break;
  }

  currentGuess--;

  // printing board
  if (currentGuess > 0) {
    for (let i = 0; i < arrCount; i++) {
      console.log(board[i]);
    }
  }
}

if (currentGuess === 0) {
  console.log(`GAME OVER... Try again`);
}

board[shipRow][shipCol] = "S";
for (let i = 0; i < arrCount; i++) {
  console.log(board[i]);
}
