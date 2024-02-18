class House
{
   constructor (color, floorCount, roomCount)
   {
    this.houseColor = color;
    this.floors = floorCount;
    this.rooms = roomCount;
   } 

   describeHouse ()
   {
    console.log(`hello this is my house. its color is ${this.houseColor} and ${this.floors} flors and ${this.rooms} rooms have.`)
   }


}


const myHouse = new House('white', 2, 6);


//console.log(myHouse);

myHouse.describeHouse();