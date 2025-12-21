class ToyotaCar {
    constructor (brand, milage) {
        console.log("Creating an object");
        this.brand = brand;
        this.milage = milage;
    }
    start() {
        console.log("Start");
    }

    stop() {
        console.log("Stop");
    }
}

let fortuner = new ToyotaCar("Toyota", 10);
