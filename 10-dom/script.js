// dom => Document Object Model

const title = document.getElementById("title");
console.log(title);
console.log(title.innerHTML);
title.innerHTML = "Hello World2";
window.document.getElementById("title").innerHTML = "Hello World3";

const width = window.innerWidth;
console.log(width);