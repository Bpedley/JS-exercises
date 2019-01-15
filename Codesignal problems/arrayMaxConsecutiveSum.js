"use strict";

/*
Given array of integers, find the maximal possible sum of some of its k
consecutive elements.
For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
arrayMaxConsecutiveSum(inputArray, k) = 8.
All possible sums of 2 consecutive elements are:
2 + 3 = 5;
3 + 5 = 8;
5 + 1 = 6;
1 + 6 = 7.
Thus, the answer is 8.
*/


function arrayMaxConsecutiveSum(inputArray, k){
  let prev = inputArray.slice(0, k).reduce((x, y) => x + y, 0);
  let max = prev;

  for(let i = k; i < inputArray.length; i++){
    prev = prev - inputArray[i-k] + inputArray[i];

    if(prev > max) max = prev;
  }

  return max;
}


console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));  // 8
console.log(arrayMaxConsecutiveSum([2, 4, 10, 1], 2));    // 14
console.log(arrayMaxConsecutiveSum([1, 3, 2, 4], 3));     // 9
console.log(arrayMaxConsecutiveSum([3, 2, 1, 1], 1));     // 3
