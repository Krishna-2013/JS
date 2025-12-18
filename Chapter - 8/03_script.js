let btn1 = document.querySelector("#btn1");
let i = 1;


btn1.addEventListener("click", () => {
    console.log("Hello World!!");
});


btn1.addEventListener("click", () => {
    console.log(`The button was clicked ${i} time(s)`);
    let h3 = document.createElement("h3");
    h3.innerText = `The button was clicked ${i} time(s)`;
    document.body.append(h3);
    i++;
});

const handelar3 = () => {
    console.log("Hey I am handelar 3");
};

btn1.removeEventListener("click", handelar3);