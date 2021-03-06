"use strict";

/*
Some people are standing in a row in a park. There are trees between them which
cannot be moved. Your task is to rearrange the people by their heights in a
non-descending order without moving the trees. People can be very tall!
Example
For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].
*/

function sortByHeight(a) {
  let arr = a.slice().filter(i => i !== -1).sort((a, b) => a - b);
  for (let i = 0; i < a.length; i++) {
    if (a[i] == -1) {
      arr.splice(i, 0, -1);
    }
  }
  return arr;
}


console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
// [-1, 150, 160, 170, -1, -1, 180, 190]
console.log(sortByHeight([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]));
// [1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77]
