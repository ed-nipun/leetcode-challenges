class Dragon 
{
    constructor(name, damage)
    {
        this.name = name;
        this.damage = damage;
       
    }

    attack(wall)
    {
        console.log(`${this.name} is attacking... there will be ${this.damage} damage`)
        wall.damage(this.damage);
    }

}


class FireDragon extends Dragon
{
    constructor(name, damage)
    {
        super(name, damage);
        this.type = 'fire';

    }
}

class IceDragon extends Dragon
{
    constructor(name, damage)
    {
        super(name, damage);
        this.type = 'ice';

    }
}


class ElectricDragon extends Dragon
{
    constructor(name, damage)
    {
        super(name, damage);
        this.type = 'electric';
    }
}



module.exports = 
{
    Dragon,
    FireDragon,
    IceDragon,
    ElectricDragon,
}