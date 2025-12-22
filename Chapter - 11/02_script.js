function sum(a, b) {
    console.log(a + b);
}

function calc(a, b, sumCallBack) {
    sumCallBack(a, b);
}

calc(1, 3, sum);