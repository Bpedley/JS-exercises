"use strict";
/*
Напишите функцию arrayToList, которая строит такую структуру, получая в качестве
аргумента [1, 2, 3], а также функцию listToArray, которая создаёт массив из
списка. Также напишите вспомогательную функцию prepend, которая получает элемент
и создаёт новый список, где этот элемент добавлен спереди к первоначальному
списку, и функцию nth, которая в качестве аргументов принимает список и число,
а возвращает элемент на заданной позиции в списке или же undefined в случае
отсутствия такого элемента.
*/

function arrayToList(arr) {
  let arrToObj = {};
  for (let i = 0; i < arr.length; i++) {
    arrToObj.value = arr[i];
    arrToObj.rest = {};
  }
  return arrToObj;
}

function listToArray() {

}


console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
