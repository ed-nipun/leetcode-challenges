function getReversed (givenString)
{
    // original string eka print karagamu

    console.log(givenString);

    // dan api me string eka array ekak karagamu

    const arrStr = givenString.split('');
    
    

    // dan api me array eka reverse karamu

    return arrStr.reverse().join('');

    
}


console.log(getReversed('hello'));