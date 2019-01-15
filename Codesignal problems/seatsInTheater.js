"use strict";

/*
Given the total number of rows and columns in the theater (nRows and nCols,
respectively), and the row and column you're sitting in, return the number of
people who sit strictly behind you and in your column or to the left, assuming
all seats are occupied.
Example
For nCols = 16, nRows = 11, col = 5, and row = 3, the output should be
seatsInTheater(nCols, nRows, col, row) = 96.
*/


function seatsInTheater(nCols, nRows, col, row) {
  return (nCols - (col - 1)) * (nRows - row);
}


console.log(seatsInTheater(16, 11, 5, 3));    // 96
console.log(seatsInTheater(1, 1, 1, 1));      // 0
console.log(seatsInTheater(13, 6, 8, 3));     // 18
console.log(seatsInTheater(60, 100, 60, 1));  // 99
