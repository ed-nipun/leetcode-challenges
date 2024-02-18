/*
dan mama box ekak hadannai yanne

xxxxxx
x    x
x    x
x    x
x    x
xxxxxx

*/

// mulinma input ekata set wena 1st row eka hadanawa

const input = 10;
const char = "x";
const space = " ";

for (let i = 0; i < 2; i++) {
  console.log(char.repeat(input));

  if (i === 1 || input === 1) break;

  for (let j = 0; j < input - 2; j++) {
    console.log(`${char}${space.repeat(input - 2)}${char}`);
  }
}
