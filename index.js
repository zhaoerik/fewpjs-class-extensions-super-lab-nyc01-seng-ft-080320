// Your code here
class Polygon {
    constructor(array) {
        this.array = array
    }

    get countSides() {
        return this.array.length
    }

    get perimeter() {
        return this.array.reduce((acc, cur) => acc + cur)
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides !== 3) return
        return ((this.array[0] + this.array[1] >= this.array[2]) && (this.array[0] + this.array[2] >= this.array[1]) && (this.array[1] + this.array[2] >= this.array[0])) 
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides !== 4) return
        return ((this.array[0] === this.array[1]) && (this.array[1] === this.array[2]) && (this.array[2] === this.array[3]))
    }
    get area() {
        return this.array[0] * this.array[1]
    }
}