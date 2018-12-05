"use strict";
/*
Напишите функцию min, принимающую два аргумента, и возвращающую минимальный
из них.
*/

function min(a, b) {
  return Math.min(...arguments);
}


document.body.innerHTML = min(0, -10);
