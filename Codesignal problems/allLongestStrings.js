"use strict";

/*
Given an array of strings, return another array containing all of its longest
strings.
Example:
For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].
*/

function allLongestStrings(inputArray) {
  let maxLen = inputArray.sort((a, b) => a.length - b.length).slice(-1)[0].length;
  return inputArray.filter(word => word.length == maxLen);
}


console.log(allLongestStrings(["abc", "eeee", "abcd", "dcd"]));
// ["eeee", "abcd"]
console.log(allLongestStrings(["a", "abc", "cbd", "zzzzzz", "a", "abcdef", "asasa", "aaaaaa"]));
// ["zzzzzz", "abcdef", "aaaaaa"]
