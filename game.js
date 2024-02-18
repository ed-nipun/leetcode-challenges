
const Dragons = require('./dragon.js')
const Wall = require('./Wall.js')

const myWall = new Wall(10, 'ice', 'fire');

myWall.view();

const regularDragon = new Dragons.Dragon('drago', 1);
const fireDragon = new Dragons.FireDragon('fire boy', 2);
const iceDragon = new Dragons.IceDragon('ice girl', 3);
const electricDragon = new Dragons.ElectricDragon('electric shok', 4);

const dragonsArr = [regularDragon, fireDragon, iceDragon, electricDragon];

for(let i = 0; i < dragonsArr.length; i++)
{
    dragonsArr[i].attack(myWall);
}

