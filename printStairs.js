const char = `x`;
let output = "";
const size = 3;

for (let i = 1; i <= size; i++) {
  for (let j = 1; j <= size; j++) {
    output = char.repeat(j);

    console.log(output);
  }
}
