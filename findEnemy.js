function findEnemy() {
  const world = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " ", 'p'],
  ];

  for (let i = 0; i < world.length; i++) {
    if (world[i].indexOf("x") !== -1) {
      console.log(`enemy found at row ${i}, col ${world[i].indexOf("x")}`);
      return;
    }
  }

  console.log(`enemy not found`);
}

findEnemy();
