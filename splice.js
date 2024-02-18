const fighters = ["mage", "warrior", "king", "trusty steed"];

// remove the trusty steed and add a wizard and a warlock in its place

fighters.splice(3, 1, "wizard", "warlock");

console.log(fighters);

console.log("---------------------------");

// remove king and put queen

fighters.splice(2, 1, "queen");

console.log(fighters);

console.log("---------------------------");

// first 3 failed. add new array remaining fighters

fighters.splice(0, 3);

const remainingFighters = fighters.slice();

console.log(remainingFighters);

console.log("---------------------------");

// add 2 peasants to front and 3 to back

for (let i = 0; i < 3; i++) {
  if (i < 2) {
    remainingFighters.unshift("peasant");
  }

  remainingFighters.push("peasant");
}

console.log(remainingFighters);

