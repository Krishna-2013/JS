let n = Number(prompt("Enter a number here: "));
let arr = [];

for (let i = 1; i <= n; i++) {
    arr[i - 1] = i;
}

console.log(arr);

let sum = arr.reduce((res,curr) =>{
    return res + curr;
});

console.log(`Sum = ${sum}`);


let factorial = arr.reduce((res,curr) =>{
    return res * curr;
});

console.log(`Factorial = ${factorial}`);