"use strict";

/*
Напишите интерфейс для создания списка.
Для каждого пункта:
Запрашивайте содержимое пункта у пользователя с помощью prompt.
Создавайте пункт и добавляйте его к UL.
Процесс прерывается, когда пользователь нажимает ESC или вводит пустую строку.
Все элементы должны создаваться динамически.
Если посетитель вводит теги – пусть в списке они показываются как обычный текст.
*/

var ul = document.createElement("ul");
document.body.appendChild(ul);

while (true) {
  var ans = prompt("Введите пункт", "");
  if (!ans) {
    break;
  }
  var li = document.createElement("li");
  li.textContent = ans;
  ul.appendChild(li);
}
