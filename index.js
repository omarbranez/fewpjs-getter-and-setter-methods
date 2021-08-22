// Add your Circle class here

class Circle { // it always starts with the attribute we construct with
    constructor(radius) {
        this.radius = radius;
    }

    set diameter(diameter) {
        this.radius = diameter / 2
    }

    get diameter() {
        return this.radius * 2
    }

    set circumference(circumference) {
        this.radius = (circumference / 2) / Math.PI
    }

    get circumference() {
        return ( this.radius * 2) * Math.PI
    }

    set area(area) {
        this.radius = Math.sqrt(area / Math.PI)
    }
    
    get area() {
        return (this.radius ** 2) * Math.PI
    }
}