
/*

10 => 10 + 9 + 8 +

*/

function sum (number)
{
    let sum = 0;
    for (let i = number; i > 0; i--)
    {
        sum += i;
    }

    return sum;
}


const sumVar = sum(10);

console.log(sumVar);