"use strict";
/*
У массивов есть метод reverse, меняющий порядок элементов в массиве на обратный.
В качестве упражнения напишите две функции, reverseArray и reverseArrayInPlace.
Первая получает массив как аргумент и выдаёт новый массив – с обратным порядком
элементов. Вторая работает как оригинальный метод reverse – она меняет порядок
элементов на обратный в том массиве, который был ей передан в качестве аргумента.
Не используйте стандартный метод reverse.
*/

function reverseArray(arr) {
  let reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}

function reverseArrayInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length/2); i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
}


console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
