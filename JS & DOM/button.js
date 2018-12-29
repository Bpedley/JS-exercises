var button = document.createElement("a");
var div = document.querySelector("div");
button.appendChild(document.createTextNode("Нажми меня"));
button.className = "button";
button.setAttribute("href", "/");
div.append(button);
button.style.cssText = "-moz-border-radius: 8px; \
  -webkit-border-radius: 8px; \
  border-radius: 8px; \
  border: 2px groove green; \
  display: block; \
  height: 30px; \
  line-height: 30px; \
  width: 100px; \
  text-decoration: none; \
  text-align: center; \
  color: red; \
  font-weight: bold; \
";