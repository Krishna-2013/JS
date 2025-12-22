function asyncfunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data1");
      resolve("Succes");
    }, 4000);
  });
}

function asyncfunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data2");
      resolve("Succes");
    }, 4000);
  });
}

console.log("Fetching data1..");
let p1 = asyncfunc1();

p1.then((res) => {
  console.log(res);
  
  console.log("Fetching data2..");
  let p2 = asyncfunc2();

  p2.then((res) => {
    console.log(res);
  });
});
