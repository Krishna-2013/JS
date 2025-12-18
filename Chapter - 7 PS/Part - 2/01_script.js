//Qus - 1: 
let new_btn = document.createElement("button");
new_btn.innerText = "Click Me!";
new_btn.style.color = "white";
new_btn.style.backgroundColor = "Red"

let body = document.querySelector("body");

body.prepend(new_btn);

//Qus - 2: 
let paragrapht = document.querySelector("p");
paragrapht.classList.add("new_paragraph");