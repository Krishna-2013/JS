let div = document.querySelector("div");
let paragraph = document.querySelector("p");

let div_id = div.getAttribute("id");
console.log(div_id);

paragraph.setAttribute("id", "par");

let paragraph_id = paragraph.getAttribute("id");
console.log(paragraph_id);

div.style.backgroundColor = "Red";
div.style.fontSize = "26px";

let new_Btn = document.createElement("button");
new_Btn.innerText = "Click ME!";
console.log(new_Btn);

/*
div.append(new_Btn);
div.prepend(new_Btn);
div.before(new_Btn);
*/
div.after(new_Btn);


let new_heading = document.createElement("h1");

new_heading.innerHTML = "<i>Hey! I am H1 heading</i>";
let body = document.body

body.prepend(new_heading);


let p2 = document.querySelector("#p2");

p2.remove();