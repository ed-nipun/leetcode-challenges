let string = "";
let number = 0;
while (string.length < 100) {
  string += `${number}, `;

  number += 1;
}
console.log(string);
