"use strict";

/*
Two two-dimensional arrays are isomorphic if they have the same number of
rows and each pair of respective rows contains the same number of elements.
Given two two-dimensional arrays, check if they are isomorphic.
Example:
For array1 = [[1, 1, 1],
          [0, 0]]
and array2 = [[2, 1, 1],
          [2, 1]]
the output should be areIsomorphic(array1, array2) = true;
*/

function areIsomorphic(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i].length !== array2[i].length) {
      return false;
    }
  }
  return true;
}


console.log(areIsomorphic([[2], [1], [3,5]], 
                          [[], [1], [1,6]])); // false
console.log(areIsomorphic([[1,1,1], [0,0]], 
                          [[2,1,3], [2,0], []])); // false
console.log(areIsomorphic([[1,3,4], []], 
                          [[2,1,2], []])); // false
