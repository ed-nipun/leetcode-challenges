const girl = ["amanda", "sarasi", "sachini", "janani", "dananjani"];

const input = "dananjani";

let index = -1;

for (let i = 0; i < girl.length; i++) {
  if (girl[i] === input) {
    console.log(`i found your girl`);
    index = i;
    break;
  }
}

if (index === -1) {
  console.log(`sorry`);
}
