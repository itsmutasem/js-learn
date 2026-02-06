// dom => Document Object Model

const title = document.getElementById("title");
console.log(title);
console.log(title.innerHTML);
title.innerHTML = "Hello World2";
window.document.getElementById("title").innerHTML = "Hello World3";

const width = window.innerWidth;
console.log(width);

alert(title.innerHTML);

const titleElement = document.querySelector(".title-class");
console.log(titleElement.innerHTML);

const titleElements = document.querySelectorAll(".title-class");
console.log(titleElements[0].innerHTML);
console.log(titleElements[1].innerHTML);

const myInput = document.getElementById("input");
console.log(myInput.value);