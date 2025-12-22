const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am a Promise");
    resolve("Succes");
    reject("Network Error");
  });
};

let promise = getPromise(123);

promise.then((res) => {
  console.log("Promise fulfiled", res);
});

promise.catch((err) => {
  console.log("Rejected", err);
});

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`Data = ${dataId}`);
//             resolve("Succes");
//             if(getNextData) {
//                 getNextData;
//             }
//         }, 5000);
//     });
// };
