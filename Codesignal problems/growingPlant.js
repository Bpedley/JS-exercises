"use strict";

/*
Each day a plant is growing by upSpeed meters. Each night that plant's height
decreases by downSpeed meters due to the lack of sun heat. Initially, plant is
0 meters tall. We plant the seed at the beginning of a day. We want to know
when the height of the plant will reach a certain level.
Example:
For upSpeed = 100, downSpeed = 10, and desiredHeight = 910, the output should be
growingPlant(upSpeed, downSpeed, desiredHeight) = 10.
*/

function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let growth = upSpeed;
  let count = 1;
  while (growth < desiredHeight) {
    growth += upSpeed - downSpeed;
    count++;
  }
  return count;
}


console.log(growingPlant(10, 9, 4));      // 1
console.log(growingPlant(5, 2, 7));       // 2
console.log(growingPlant(7, 3, 443));     // 110
console.log(growingPlant(6, 5, 10));      // 5
