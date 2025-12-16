// For-of loop
let str = "Krishna";
let length = 0;
for(let i of str) {
    console.log("i = ",i);
    length++;
};

console.log("String length is ",length)

// For-in loop

let student = {
    name : "Krishna",
    age : 12,
    result : 89.78,
    is_pass : true,
};

for(let keys in student) {
    console.log("The key is ",keys, "and the value is ", student[keys]);
}