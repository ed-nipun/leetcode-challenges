class Wall 
{
    constructor(height, strong, weak,)
    {
        this.maxHeight = height;
        this.currentHeight = height;
        this.strongAgainst = strong;
        this.weakAgainst = weak;
    }

    view()
    {
        console.log('\n\n');
        console.log(`current height: ${this.currentHeight} | strong: ${this.strongAgainst} | weak: ${this.weakAgainst}\n`)
        for (let i = 0; i < this.currentHeight; i++)
        {
            console.log(' '.repeat(10)+'#'.repeat(20));
        }

        console.log('-'.repeat(40));
    }

    damage (damage)
    {
        this.currentHeight -= damage;

        this.view();
    }


}


module.exports = Wall;