"use strict";
/*
Напишите функцию range, принимающую два аргумента – начало и конец диапазона –
и возвращающую массив, который содержит все числа из него, включая начальное и
конечное.
Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму.
В качестве бонуса дополните функцию range, чтобы она могла принимать
необязательный третий аргумент – шаг для построения массива. Если он не задан,
шаг равен единице.
*/

function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

function range(start, end, step=1) {
  let rangeArr = [];
  if(step < 0) {
    for (let i = start; i >= end; i+=step) {
      rangeArr.push(i);
    }
  } else {
    for (let i = start; i <= end; i+=step) {
      rangeArr.push(i);
    }
  }
  return rangeArr;
}


console.log(sum(range(1, 10)));
console.log(sum(range(5, 2, -1)));
