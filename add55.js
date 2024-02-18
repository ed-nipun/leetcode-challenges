const { number } = require("yargs");

const readline = require("node:readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Type a number?`, (name) => {
  let nameToNumber = parseInt(name);

  if (isNaN(nameToNumber)) {
    console.log("please type a number");
  } else {
    const isEven = nameToNumber % 2 === 0;

    console.log(`${isEven ? (nameToNumber += 55) : (nameToNumber += 100)}`);
  }

  readline.close();
});
