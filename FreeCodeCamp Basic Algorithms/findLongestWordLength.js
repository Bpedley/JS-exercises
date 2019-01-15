"use strict";

/*
Return the length of the longest word in the provided sentence.
Your response should be a number.
*/


function findLongestWordLength(str) {
  return str.split(" ").reduce((a, b) => Math.max(a, b.length), 0);
}


console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); // 6
