let btn1 = document.querySelector("#btn1");
let i = 1;

btn1.onclick = () => {
    console.log(`The button was clicked ${i} time(s)`);
    let h3 = document.createElement("h3");
    h3.innerText = `The button was clicked ${i} time(s)`;
    document.body.append(h3);
    i++;
}

let d1 = document.querySelector("#d1");

let h3 = document.createElement("h3");
h3.innerText = `You are inside the div`;

d1.onmouseover = () => {
    document.body.append(h3);
    print = console.log(`you are inside the div`);
}

d1.onmouseleave = () => {
    h3.remove();
}