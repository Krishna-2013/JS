const URL = "https://dogapi.dog/api/v1/facts?number=1";

const factPara = document.querySelector("#fact");
const btn1 = document.querySelector("#btn1");


const getFacts = async () => {
    console.log("Getting Data...");
    let response = await fetch(URL);
    console.log(response);
    console.log(response.status);
    let data = await response.json();
    factPara.innerText = data.facts[0];
};

btn1.addEventListener("click", getFacts);