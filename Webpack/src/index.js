import "./style.scss"

const mainDiv = document.getElementById("container");

const title = document.createElement("h1");
title.textContent = "Desolation Wilderness";

const caption = document.createElement("p");
caption.textContent = "Wilderness area in Lake Tahoe, California";

const image = document.createElement("img");
image.id = "image";


mainDiv.appendChild(title);
mainDiv.appendChild(caption);
mainDiv.appendChild(image);
