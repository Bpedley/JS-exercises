"use strict";
/*
Напишите рекурсивную функцию isEven согласно этим правилам. Она должна принимать
число и возвращать булевское значение.
Потестируйте её на 50 и 75. Попробуйте задать ей -1. Почему она ведёт себя таким
образом? Можно ли её как-то исправить?
*/

function isEven(num) {
  if (num == 1) {
    return false;
  } else if (!num) {
    return true;
  } else if (num < 0) {
    return isEven(-num);
  } else {
    return isEven(num - 2);
  }
}


document.body.innerHTML = isEven(-4);
