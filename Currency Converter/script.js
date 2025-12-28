const BASE_URL = "https://hexarate.paikama.co/api/rates";

const dropdowns = document.querySelectorAll("select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

window.addEventListener("load", () => {
    updateExchangeRate();
});

for (let select of dropdowns) {
  for (let Currcode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = Currcode;
    newOption.value = Currcode;
    select.append(newOption);
    if (select.name === "from" && Currcode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && Currcode === "BDT") {
      newOption.selected = "selected";
    }
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateFlag = (element) => {
  let Currcode = element.value;
  let Countrycode = countryList[Currcode];
  let newSrc = `https://flagsapi.com/${Countrycode}/shiny/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal <= 0) {
    amtVal = 1;
    amount.value = 1;
  }

  const URL = `${BASE_URL}/${fromCurr.value}/${toCurr.value}/latest`;
  let response = await fetch(URL);
  let data1 = await response.json();
  let rate = data1.data.mid;

  let finalAmount = amtVal * rate;
  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};
