"use strict";

/*
For the given sequence of houses determine the sum that the boy will get.
It is guaranteed that there will always be at least one 0 house on the path.
Example:
For inputArray = [5, 1, 2, 3, 0, 1, 5, 0, 2], the output should be
houseNumbersSum(inputArray) = 11.
The answer was obtained as 5 + 1 + 2 + 3 = 11.
*/

function houseNumbersSum(inputArray) {
  let zero = inputArray.indexOf(0);
  if (zero == -1) {
    return inputArray.reduce((a, b) => a + b);
  } else if (zero == 0) {
    return 0;
  } else {
    return inputArray.slice(0, zero).reduce((a, b) => a + b);
  }
}


console.log(houseNumbersSum([4, 2, 1, 6, 0]));              // 13
console.log(houseNumbersSum([4, 1, 2, 3, 0, 10, 2]));       // 10
console.log(houseNumbersSum([0, 1, 2, 3, 0]));              // 0
console.log(houseNumbersSum([5, 1, 1, 3, 0, 1, 5, 0, 2]));  // 10
