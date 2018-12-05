"use strict";

/*
Given a rectangular matrix and an integer column, return an array containing
the elements of the columnth column of the given matrix (the leftmost column
is the 0th one).
Example
For matrix = [[1, 1, 1, 2], 
          [0, 5, 0, 4], 
          [2, 1, 3, 6]]
and column = 2, the output should be
extractMatrixColumn(matrix, column) = [1, 0, 3].
*/

function extractMatrixColumn(matrix, column) {
  let col = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (j === column) {
        col.push(matrix[i][j]);
      }
    }
  }
  return col;
}


console.log(extractMatrixColumn(
  [[1,1,1], 
  [0,5,0], 
  [2,1,3]], 2));
// [1, 0, 3]
console.log(extractMatrixColumn(
  [[1,1], 
  [5,0], 
  [2,3]], 0));
// [1, 5, 2]
