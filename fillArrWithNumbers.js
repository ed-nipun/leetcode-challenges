// i am going to create an array like this
// [0,1,2,3,4,5,6,7,8]


const arr = [];

for (let i = 0; i < 9; i++)
{
    arr.push(i);
}

console.log(arr);


// now i am going to create an array like this
// [8,7,6,5,4,3,2,1,0];

const arr2 = [];

for (let i = 0; i < 9; i++)
{
    arr2.unshift(i);
}

console.log(arr2);



// now lets remove elements from front

console.log(`arr length: ${arr.length}`)

let length = arr.length;

for (let i = 0; i < length; i++)
{
    let deleted = arr.shift();
    console.log(arr);
}


// now lets remove elements from back

const length2 = arr2.length;

for (let i = 0; i < length2; i++)
{
    arr2.pop();
    console.log(arr2);
}