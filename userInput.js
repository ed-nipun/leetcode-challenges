const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`What is your GF's name? `, name => {
    
    

    console.log(`Your gfs name is ${name}.
your answer is ${name.toLowerCase() === 'nipun'}`);


    readline.close();
  });