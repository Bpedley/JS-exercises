"use strict";

/*
Given two strings, find the number of common characters between them.
Example:
For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2) = 3.
Strings have 3 common characters - 2 "a"s and 1 "c".
*/

function commonCharacterCount(s1, s2) {
  let count = 0;
  s1 = s1.split("");
  for (let i = 0; i < s2.length; i++) {
    if (s1.includes(s2[i])) {
      s1.splice(s1.indexOf(s2[i]), 1);
      count++;
    }
  }
  return count;
}


console.log(commonCharacterCount("zzzz", "zzzzzzz"));   // 4
console.log(commonCharacterCount("abca", "xyzbac"));    // 3
console.log(commonCharacterCount("a", "b"));            // 0
