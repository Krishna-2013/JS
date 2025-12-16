// Let cannot be redeclear but can be updated

let name = "Krishna";
let age = 12;
age = 13;

console.log(name);
console.log(age);

// Const cannot be redeclear, also cannot be updated

const name2 = "Rife";
const age2 = 13;
// age2 = 15; gives an eror

console.log(name2);
console.log(age2);


let a;
// const a; gives an eror
console.log(a);

// let and const canbe use many times in different groups
{
    let x = 5;
    console.log(x);

    const y = 10;
    console.log(y);
}

{
    let x = 3;
    console.log(x);

    const y = 7;
    console.log(7);
}