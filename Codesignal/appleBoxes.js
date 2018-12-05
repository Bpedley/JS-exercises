"use strict";

/*
Your task is to calculate the difference between the number of red apples and
the number of yellow apples.
Example:
For k = 5, the output should be
appleBoxes(k) = -15.
There are 1 + 3 * 3 + 5 * 5 = 35 yellow apples and 2 * 2 + 4 * 4 = 20 red apples, making the answer 20 - 35 = -15.
*/

function appleBoxes(k) {
  let yellow = 0;
  let red = 0;
  for (let i = 1; i <= k; i++) {
    i % 2 ? yellow += i*i : red += i*i;
  }
  return red - yellow;
}


console.log(appleBoxes(15)); // -120
console.log(appleBoxes(36)); // 666
console.log(appleBoxes(1));  // -1
