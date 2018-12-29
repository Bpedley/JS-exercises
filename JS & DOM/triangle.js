"use strict";
/*
Напишите цикл, который за 7 вызовов console.log выводит такой треугольник:
    #
    ##
    ###
    ####
    #####
    ######
    #######
*/

function triangle(size) {
  let drawTriangle = "";
  
  for (let i = 1; i <= size; i++) {
    drawTriangle += "#".repeat(i) + "\n";
  }
  return drawTriangle;
}


document.body.innerText = triangle(10);
