// hari dan mama empty world ekak hadanna ona

const count = 3;

const worldArr = " ".repeat(count).split("");

console.log(worldArr);

// hari dan mama worldArr eke hari meda hoyaganna ona

// kohomada mama eka karanne?

let positionIndex = Math.floor(count / 2);

// hari dan meda hoyagaththa. dan mama meka worldArr eke mark karanna ona

console.log(`player joined...`);

worldArr[positionIndex] = "P";

console.log(worldArr);

// hari dan wede ok. dan mata karanna thiyenne user gen input ekak ganna eka

var readlineSync = require("readline-sync");

let playerWishToContinue = true;

while (playerWishToContinue) {
  var input = readlineSync.question("\n\nWhere do you wanna move? ");
  console.log(`lets move to ${input}`);

  // hari dan user ge input ekak gaththa. dan mama e input eka anuwa player ge
  // position eka change karanna ona

  // mulinma player dan inna thena empty karaganna

  worldArr[positionIndex] = " ";

  // hari dan player dunne right nam += 1

  if (input === "right") {
    positionIndex += 1;
  } else if (input === "left" && positionIndex > 0) {
    positionIndex -= 1;
  }
  else
  {
    console.log(`sorry cant move to ${input}`);
  }

  // dan me position ekata player wa set karanna ona

  worldArr[positionIndex] = "P";
  // hari dan worldArr eka view karamu
  console.log(worldArr);

  var wish = readlineSync.question("do you wanna continue? ");

  if (wish !== "yes") {
    playerWishToContinue = false;
    console.log(`thanks for playing...`);
  }
}
