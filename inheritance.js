class Dad
{
    constructor (tall, weight, skin)
    {
        this.tall = tall;
        this.weight = weight;
        this.skin = skin;
        this.howFast = null;
    }
}


class Baby extends Dad
{
    constructor (name)
    {
        super();
        this.tall = '150cm';
        this.name = name;

        this.howFast = 100;
    }
}




const baby = new Baby('nipun');

console.log(baby);