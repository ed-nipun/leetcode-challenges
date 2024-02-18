/*
mama karanna ona string ekaka spaces iwath karala. output ekak hadana eka

*/

const input = 'hello bro nothing whats going on';

let output = '';

// dan mama balanwa input eke spaces thiyenawada kiyala . thiyenawa nam skip 
// karanawa

for (let i = 0; i < input.length; i++)
{
    if (input[i] === " ") continue;

    output += input[i];
    if (output.length >= 20) break;

}
console.log(output+ ' ' + output.length);