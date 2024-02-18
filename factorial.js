/*

mokadda mama mulinama karanna ona?
n denna ona

ilagata mata loop ekak ona wena.

output eka ona wenawa

*/

// set the n and output
const n = 10;

let output = 1;

let outputString = "";

for (let i = 1; i <= n; i++) {
  output *= i;
}

for (let i = n; i > 0; i--) {
  if (i === 1) {
    outputString += `${i} = ${output}`;
  } else {
    outputString += `${i} * `;
  }
}

console.log(`${n}! = ${outputString}`);
