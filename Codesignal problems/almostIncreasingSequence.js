"use strict";

// Given a sequence of integers as an array, determine whether it is possible
// to obtain a strictly increasing sequence by removing no more than one
// element from the array.
// For sequence = [1, 3, 2, 1], the output should be
// almostIncreasingSequence(sequence) = false.
// For sequence = [1, 3, 2], the output should be
// almostIncreasingSequence(sequence) = true.


function almostIncreasingSequence(sequence) {
  let count = 0;
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i-1]) {
      count++;
      if (sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]) {
        return false;
      }
    }
  }
  return count <= 1;
}

console.log(almostIncreasingSequence([1, 3, 2, 1]));              // false
console.log(almostIncreasingSequence([1, 3, 2]));                 // true
console.log(almostIncreasingSequence([40, 50, 60, 10, 20, 30]));  // false
console.log(almostIncreasingSequence([1, 2, 5, 3, 5]));           // true
