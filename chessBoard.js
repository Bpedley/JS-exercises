"use strict";
/*
Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии
разделяются символами новой строки. На каждой позиции либо пробел, либо #.
В результате должна получиться шахматная доска.
*/

function board(size) {
  let drawBoard = "";
  
  for (let i = 0; i <= size; i++) {
    if (i % 2) {
      drawBoard += " #".repeat(size/2) + "\n";
    } else {
      drawBoard += "# ".repeat(size/2) + "\n";
    }
  }
  return drawBoard;
}


console.log(board(10) + "\n");
console.log(board(18));
