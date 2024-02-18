const monster =
{
    name: 'fear',
    dangerLevel: 100,
    purasaram: 
    [
        'i have eaten 3 pizzas',
        'i can run',
        'i am tall',
    ],
    intimidatePerson: function (person)
    {
        console.log(`${person}.. I am ${this.name}`);
    }

};

monster.intimidatePerson('pissa');  