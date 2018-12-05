"use strict";

/*
Given an integer n, find the minimal k. In other words, find the smallest
factorial which is not less than n.
Example:
For n = 17, the output should be
leastFactorial(n) = 24.
17 < 24 = 4! = 1 * 2 * 3 * 4, while 3! = 1 * 2 * 3 = 6 < 17).
*/

function leastFactorial(n) {
  let fact = 1;
  for (let i = 1; i <= 5; i++) {
    fact *= i;
    if (fact >= n) {
      return fact;
    }
  }
}


console.log(leastFactorial(5));   // 6
console.log(leastFactorial(25));  // 120
console.log(leastFactorial(18));  // 24
console.log(leastFactorial(109)); // 120
