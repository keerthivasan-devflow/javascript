// Calculating area of a rectangle, square and circle.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    let areaOfRectangle = this.width * this.height;
    console.log("Area of rectangle is: ", areaOfRectangle);
  }
}

class Square extends Rectangle {
  constructor(width, height, length) {
    super(width, height);
    this.sideLength = length;
  }
  calculateArea() {
    super.calculateArea();
    let areaOfSquare = this.sideLength * this.sideLength;
    console.log("Area of square : ", areaOfSquare);
  }
}

class Circle {
  constructor(radius) {
    this.radius = 10;
  }
  get area() {
    return Math.PI * this.radius * this.radius;
  }

  set diameter(x) {
    this.diameter = x / 2;
  }
}

let square = new Square(20, 10, 8);
square.calculateArea();
let circle = new Circle();
console.group("Area of a circle", circle.area);
Circle.diameter = 24.44;
console.log(Circle.diameter);
