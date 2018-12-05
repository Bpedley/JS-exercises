"use strict";

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
