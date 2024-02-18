/*
hari dan mata array ekak labila thiyenawa
[a,b,c]
dan mama meka reverse karaganna ona wenama variable ekakata
[c,b,a]
*/


// mulinma main array eka ganimu

const mainArr = ['a','b','c'];



const newArr = [];

// ilagata mama karanne main array eke thiyena string tika ganna eka

for (let i = 0; i < mainArr.length; i++)
{
    //console.log(mainArr[i]);

    newArr.unshift(mainArr[i]);

}

console.log(mainArr);
console.log(newArr);