const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`What is your password? `, pass => {

    const password = '123'

    if (pass === password)
    {
        console.log('ACCESS GRANTED!')
    }

    if (pass !== password)
    {
        console.log('wrong password')
    }
    
    readline.close();
  });