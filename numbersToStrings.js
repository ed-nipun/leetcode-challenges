var readlineSync = require('readline-sync');
 
// Wait for user's response.
var low = +readlineSync.question('low: ');
var high = +readlineSync.question('high: ');


const obj = 
{

};


for (let i = low; i <= high; i++)
{
    obj[i] = String(i);
}

console.log(obj);


// dan mata karanna thawa weda thiyenawa

for (let key in obj)
{
    const number = +key;
    obj[key] =
    {
        even: number % 2 === 0,
        remain10: number % 10,
        square: number ** 2,
    }
}


console.log(obj);