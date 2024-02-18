let primitive1 = 20;

let primitive2 = primitive1;

console.log(`${primitive1 === primitive2}`);



let nonPrimitive1 = [];

let nonPrimitive2 = nonPrimitive1;

console.log(`${nonPrimitive1 === nonPrimitive2}`);


console.log(`--------------------------------`)



primitive2 = 20;
nonPrimitive2 = [];

console.log(`${primitive1 === primitive2}`);

console.log(`${nonPrimitive1 === nonPrimitive2}`);


/*
wenama value ekak assign karala thiyenawa nam nonprimitive walata, e value eka
samana unath aththatama samana na.
*/





