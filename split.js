// hari dan mata string ekak split karaganna ona

const string = 'dragon - panther - whale - giant squid - take-out - cat dog';

// dan mata meka convert karaganna ona array ekakata

const array = string.split(' - ');

console.log(array);


/////////////////////////////////////////////////////////////////


// hari dan api array eka aye string ekak widihata convert karamu


const newString = array.join(', ');

console.log(newString);

///////////////////////////////////////////////////////////////////


// ok. dan mama karanna ona, string ekak dunnama e string eka reverse karana eka


const myString = 'abcd';

const testArray = myString.split('');

// [a,b,c,d]

const finalString = testArray.reverse().join('');

console.log(finalString);
