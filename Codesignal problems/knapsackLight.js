"use strict";

/*
You found two items in a treasure chest! The first item weighs weight1 and is
worth value1, and the second item weighs weight2 and is worth value2. What is
the total maximum value of the items you can take with you, assuming that your
max weight capacity is maxW and you can't come back for the items later?
Example
For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4, and maxW = 8,
the output should be knapsackLight(value1, weight1, value2, weight2, maxW) = 10.
*/

function knapsackLight(value1, weight1, value2, weight2, maxW) {
  if (weight1 + weight2 <= maxW) {
    return value1 + value2;
  } else if (weight1 > maxW && weight2 > maxW) {
    return 0;
  } else if (value1 > value2 && weight1 <= maxW) {
    return value1;
  } else if (value2 > value1 && weight2 <= maxW){
    return value2;
  }
  return value1;
}


console.log(knapsackLight(10, 5, 6, 4, 9));       // 16
console.log(knapsackLight(5, 3, 7, 4, 6));        // 7
console.log(knapsackLight(10, 2, 11, 3, 1));      // 0
console.log(knapsackLight(15, 2, 20, 3, 2));      // 15
