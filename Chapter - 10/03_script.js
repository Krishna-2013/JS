class person {
    constructor () {
        this.species = "home spaines";
    }
    eat () {
        console.log("eat");
    }

    sleep () {
        console.log("sleep");
    }

    work () {
        console.log("do nothing")
    }
}

class engineer extends person {
    constructor (branch) {
        super();
        this.branch = branch;
    }
    work () {
        console.log("Solve problems");
    }
}

let krishnaObj = new engineer("AML"); 