"use strict";

/*
We'll pass you an array of two numbers. Return the sum of those two numbers
plus the sum of all the numbers between them.
The lowest number will not always come first.
*/


function sumAll(arr) {
  let sum = 0;
  arr.sort((a, b) => a - b);

  for (let i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }

  return sum;
}


console.log(sumAll([1, 4]));   // 10
console.log(sumAll([4, 1]));   // 10
console.log(sumAll([5, 10]));  // 45
console.log(sumAll([10, 5]));  // 45
