const bearBeast = 
{
    age: 25,
    name: 'ghost',
    isDangerous: true,
    childrens: ['david', 'ronaldo', 'malinga'],
    bearAttack
}


function bearAttack (warning, name)
{
    console.log(`${warning} by ${name}`);
}


function viewDetails ()
{
    console.log(bearBeast.name);
    console.log(bearBeast.age);
    console.log(bearBeast.isDangerous);
    console.log(bearBeast.childrens);
    bearBeast.bearAttack('fuck you', bearBeast.name);
}

viewDetails();

