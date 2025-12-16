let arr = ["Dhaka", "Chattogram", "Sylhet"];

arr.forEach(function printval(val) {
    console.log(val);
})


arr.forEach((val, idx) => {
    console.log(val, idx);
})