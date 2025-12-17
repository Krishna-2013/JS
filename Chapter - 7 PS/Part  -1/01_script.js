h2 = document.querySelector("h2");

h2.innerText = h2.innerText + " from Krishna.";

divs = document.querySelectorAll(".box");

let idx = 1;
for (div of divs) {
    div.innerText = `New Unique Value ${idx}`;
    idx++;
}
