/*

-
--
---
--
-

-
--
---
--
-

*/

function printMountains(height, howMany) {
  for (let j = 0; j < howMany; j++) {
    for (let i = 0; i <= height; i++) {
      console.log("-".repeat(i));
    }

    for (let i = height - 1; i > 0; i--) {
      console.log("-".repeat(i));
    }
  }
}

printMountains(20, 5);
