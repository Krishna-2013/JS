let arr = [1, 2, 3, 4, 5, 6, 7];

let even_arr = arr.filter((val) => {
    return val % 2 === 0;
});

console.log(even_arr);

let arr2 = [1, 2, 3, 4];

const output = arr2.reduce((res, curr) => {
    return res + curr;
});

console.log(output);

let arr3 = [5, 6, 1, 2, 3];

const output2 = arr3.reduce((res, curr) => {
    return res > curr ? res : curr;
});

console.log(output2);