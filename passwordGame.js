/* 
game eka start weddi userta lakunu 0 k labenawa

1st character eka ? nam {
    2nd character eka  ! nam += 2
    2nd character eka % nam {
      += 3
      string eke length eke ganata points add wenawa  
    }
    else += 1
}
1st character eka ? newei eyawa tharagayen iwath karanawa

anthimata eyage lakunu view wenna ona

*/

let points = 0;

const input = "?%lsjjs";


if (input[0] === '?')
{
    if (input[1] === '!') points += 2;
    else if (input[1] === '%')
    {
        points += 3;
        points += input.length;

    }
    else
    {
        points += 1;
    }
}

console.log(points);
