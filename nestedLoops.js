/*



*/

const string = 'ab';

for (let i = 0; i < 2; i++)
{
    console.log(string[i] + ' ===');

    for (let j = 0; j < 3; j++)
    {
        console.log(string[i]+j);
    }

    console.log('----------------')
}