for (let i = 0; i < 6; i++)
{
    const isEven = i % 2 === 0;
    if (isEven) continue;

    console.log(i);
}