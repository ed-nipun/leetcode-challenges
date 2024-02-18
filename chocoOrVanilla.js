const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`What is your favorite ice creame flavor? `, name => {

    const isChocoOrVanilla = name.toLowerCase() === 'choco' || name.toLowerCase() === 'vanilla';

    console.log(isChocoOrVanilla ? 'yum' : 'ew');


    
    readline.close();
  });