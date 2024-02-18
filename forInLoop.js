const squidLord = 
{
    name: 'squid',
    age: 24,
    isDangerous: true,
    makeSound: () => console.log('bloop bloop'),
};



for (let key in squidLord)
{
    console.log(`${key}: ${squidLord[key]}`);
}