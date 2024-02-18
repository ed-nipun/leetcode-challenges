// make worlds

const world1 = [];
const world2 = [];
const world3 = [];
function makeWorld(world, line1, line2, line3) {
  // line 1

  makeLines(world, line1, 0);

  // line 2

  makeLines(world, line2, 1);

  // line 3
  makeLines(world, line3, 2);

  // view world row by row
  viewWorld(world);
}

function makeLines(world, line, index) {
  world.push([]);
  for (let i = 0; i < line; i++) {
    world[index].push(" ");
  }
}

function viewWorld(world) {
  for (let i = 0; i < world.length; i++) {
    console.log(world[i]);
  }
}

makeWorld(world1, 2, 1, 3);
console.log();
makeWorld(world2, 4, 2, 3);
console.log();
makeWorld(world3, 3, 3, 3);

// glue worlds

let theGlueWorld = [];

function pushToGlueWorld(world) {
  for (let i = 0; i < world.length; i++) {
    theGlueWorld.push(world[i].slice());
  }
}

function glueWorlds(world1, world2) {
  console.log(`\nlets glue the worlds....`);

  pushToGlueWorld(world1);
  pushToGlueWorld(world2);

  viewWorld(theGlueWorld);

  // changing theGlueWorld

  theGlueWorld[0][2] = "X";
  console.log(`changed theGlueWorld`);
  viewWorld(theGlueWorld);
}

glueWorlds(world2, world3);

// testing

console.log(`testing...`);

viewWorld(world2);
viewWorld(world3);
