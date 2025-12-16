let stu_name = ["Krishna", "Rife", "Sudipto", "Siam", "Taj"];

//For loop
console.log("By for loop: ");
for(let i = 0; i<stu_name.length; i++) {
    console.log(stu_name[i]);
}

//For of loop
console.log("\nBy for of loop: ");
for(el of stu_name) {
    console.log(el);
}