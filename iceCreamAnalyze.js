const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`What is your favorite ice creame flavor? `, name => {

    const flavor = name.toLowerCase();

    if (flavor === 'choco' || flavor === 'vanilla')
    {
      console.log('yum');
    }
    else if (flavor === "strawberry")
    {
      console.log('fruity');
    }
    else if (flavor === "mint")
    {
      console.log("how fresh");
    }
    else if (flavor === "coffee")
    {
      console.log("disgusting");
    }
    else
    {
      console.log("all false (i didnt know that was a flavor)")
    }


    
    readline.close();
  });