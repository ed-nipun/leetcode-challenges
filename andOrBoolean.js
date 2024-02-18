// ok now you gave me a boolean array

const boolArr = [true, false, true, true];

// i should add && to between each one

// lets get indexes of boolArr

let boolStr = boolArr[0];

for (let i = 1; i < boolArr.length; i++)
{
    
    boolStr = boolStr || boolArr[i];

}

console.log(boolStr);