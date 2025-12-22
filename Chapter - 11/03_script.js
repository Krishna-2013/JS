function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Data = ${dataId}`);
      resolve("Succes");
      // if (getNextData) {
      //     getNextData();
      // }
    }, 2000);
  });
}

//call back hell
// getData(1, () => {
//     console.log("Getting Data 2.....");
//     getData(2, () => {
//         console.log("Getting Data 3.....");
//         getData(3, () => {
//             console.log("Getting Data 4.....");
//             getData(4);
//         });
//     });
// });

//promise chain

getData(1)
  .then((res1) => {
    return getData(2);
  })
  .then((res2) => {
    return getData(3);
  })
  .then((res) => {
    console.log(res);
  });
