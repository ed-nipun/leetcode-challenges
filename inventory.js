/*
ball - 5
bat - 10
football - 20
vollyball - 15
*/

let score = 0;

function getScore(inventoryArr) {
    
  for (let i = 0; i < inventoryArr.length; i++) {
    if (inventoryArr[i] === "ball") score += 5;
    else if (inventoryArr[i] === "bat") score += 10;
    else if (inventoryArr[i] === "football") score += 20;
    else if (inventoryArr[i] === "vollyball") score += 15;
    else score += 1;
  }

  return score;
}

const gotScore = getScore(["ball", "bat", "cap", "bot", "football"]);
console.log(gotScore);
