"use strict";
/*
Используйте метод reduce в комбинации с concat для свёртки массива массивов
в один массив, у которого есть все элементы входных массивов.
*/

function arrConcat(arr) {
  return arr.reduce((a, b) => a.concat(b));
}


var arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrConcat(arrays));
// → [1, 2, 3, 4, 5, 6]
