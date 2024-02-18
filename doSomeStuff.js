function doStuff (char, number)
{
    for (let i = 0; i <= number; i++)
    {
        for (let j = 0; j < i; j++)
        {
            console.log(`${char.repeat(i)}`)

        }
    }
}


doStuff('?', 4);