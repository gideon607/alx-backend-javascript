class HolbertonClass {
    constructor(size, location) {
        this._size = size;
        this._location = location;
    }

    // Getter for size
    get size() {
        return this._size;
    }

    // Getter for location
    get location() {
        return this._location;
    }

    // Custom method for casting into a number
    toNumber() {
        return this._size;
    }

    // Custom method for casting into a string
    toString() {
        return this._location;
    }
}

export default HolbertonClass;
