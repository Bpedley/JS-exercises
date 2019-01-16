"use strict";

/*
You will be provided with an initial array (the first argument in the destroyer
function), followed by one or more arguments. Remove all elements from the
initial array that are of the same value as these arguments.
*/


function destroyer(arr, ...args) {
  for (let i = 0; i < arr.length; i++) {
    if (args.includes(arr[i])) {
      arr.splice(i, 1);
      i--;
    }
  }

  return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));     // [1, 1]
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));  //  [1, 5, 1]
