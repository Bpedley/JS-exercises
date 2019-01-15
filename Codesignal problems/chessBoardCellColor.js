"use strict";

/* 
Given two cells on the standard chess board, determine whether they have the
same color or not.
Example
For cell1 = "A1" and cell2 = "C3", the output should be
chessBoardCellColor(cell1, cell2) = true.
For cell1 = "A1" and cell2 = "H3", the output should be
chessBoardCellColor(cell1, cell2) = false. 
*/


function chessBoardCellColor(cell1, cell2) {
  cell1 = cell1.split("");
  cell2 = cell2.split("");
  let row = {A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8};
  return ((row[cell2[0]] + +cell2[1]) % 2) == ((row[cell1[0]] + +cell1[1]) % 2);
}


console.log(chessBoardCellColor("A1", "C3")); // true
console.log(chessBoardCellColor("A1", "H3")); // false
console.log(chessBoardCellColor("A1", "A2")); // false
console.log(chessBoardCellColor("A1", "B2")); // true
