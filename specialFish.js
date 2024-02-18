const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`Give me a fish? `, name => {

    // dan api karanna ona user dunna fish wa variable ekakata ganna eka

    const fish = name;

    // ilagata api karanna ona mokadda? ape fish la set eka hadunwanna ona

    const specialFishList = 'whale';
    const fishList = `goldfish shark dolphin ${specialFishList}`;

    if (fishList.includes(fish))
    {
        console.log(`your fish is included our list`);

        if (specialFishList.includes(fish))
        {
            console.log(`your fish is also incuded our special fish list`);
        }
    }
    else
    {
        console.log(`sorry bro. try again`);
    }

    
    readline.close();
  });