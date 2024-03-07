const cloneMethod = Symbol("clone");

class Car {
    constructor(brand, motor, color) {
        this._brand = brand;
        this._motor = motor;
        this._color = color;
    }

    // Getter for brand
    get brand() {
        return this._brand;
    }

    // Getter for motor
    get motor() {
        return this._motor;
    }

    // Getter for color
    get color() {
        return this._color;
    }

    // Method to clone car
    cloneCar() {
        const newCar = new Car();
        Object.assign(newCar, this);
        newCar[cloneMethod] = this.cloneCar;
        return newCar;
    }
}

export default Car;
