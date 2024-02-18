const animals = ['zebra', 'elephant', 'lion', 'penguin'];

const copy = animals.slice();

console.log(copy)


const withOutLast2 = animals.slice(0,-2);

console.log(withOutLast2);

withOutLast2.push('turtle');

const copy2 = withOutLast2.slice(1, -1);



console.log(copy2);
