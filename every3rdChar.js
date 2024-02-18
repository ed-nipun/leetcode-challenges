const input = 'elephant giraffe pony seabass anaconda china lettuce hamburger french';

let output = '';

for (let i = 0; i < input.length; i += 3)
{
    output += input[i];
}

console.log(output);