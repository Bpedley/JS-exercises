"use strict";
/*
Напишите программу, которая выводит через console.log все числа от 1 до 100,
с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить
‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел,
которые делятся и на 3, и на 5.
*/

function fizzBuzz() {
  let numbers = "";
  
  for (let i = 0; i <= 100; i++) {
    if (!(i % 3) && !(i % 5)) {
      numbers += "FizzBuzz\n";
    } else if (!(i % 3)) {
      numbers += "Fizz\n";
    } else if (!(i % 5)) {
      numbers += "Buzz\n";
    } else {
      numbers += `${i}\n`;
    }
  }
  return numbers;
}


document.body.innerText = fizzBuzz();
