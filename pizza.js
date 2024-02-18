function funcName (arr)
{
   return arr.indexOf('pizza') !== -1;
}

const arr1 = ['pizza', 'apple', 'banana'];
const arr2 = ['elephant', 'lion'];



console.log(`${funcName(arr1)}`)
console.log(`${funcName(arr2)}`)