let marks = [85, 97, 44, 37, 76, 60];

let sum = 0;

for(let el of marks){
    sum = sum + el;
}

let avg = sum/marks.length;
console.log(`The avg marks of the clas is ${avg}`);