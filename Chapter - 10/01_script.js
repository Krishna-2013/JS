let student = {
    fullname : "Krishna",
    marks : 94,
    printMarks : function () {
        console.log(`Marks = ${this.marks}`);
    },
};


const employee = {
    calcTax () {
        console.log("tax rate is 10%");
    },
};

const Rife = {
    salery : 50000,
};

Rife.__proto__ = employee;