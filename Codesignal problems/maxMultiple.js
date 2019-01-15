"use strict";

/*
Given a divisor and a bound, find the largest integer N such that:
N is divisible by divisor.
N is less than or equal to bound.
N is greater than 0.
It is guaranteed that such a number exists.
Example
For divisor = 3 and bound = 10, the output should be
maxMultiple(divisor, bound) = 9.
The largest integer divisible by 3 and not larger than 10 is 9.
*/


function maxMultiple(divisor, bound) {
  return parseInt(bound / divisor) * divisor;
}


console.log(maxMultiple(3, 10));  // 9
console.log(maxMultiple(2, 7));   // 6
console.log(maxMultiple(10, 50)); // 50
console.log(maxMultiple(7, 100)); // 98
