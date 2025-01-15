class Person {
  constructor(age, loc, zipcode) {
    console.log("Parent class constructor...");
    this.firstname = "Keerthivasan";
    this.lastname = "Mani";
    this.age = age;
    this.location = loc;
    this.pincode = zipcode;
  }

  display(header) {
    document.write(`<div>
        <h1>${header}</h1>
        <p>Name: ${this.firstname} ${this.lastname}</p>
        <p>Age: ${this.age}</p>
        <p>Location: ${this.location}</p>
        <p>Pincode: ${this.pincode}</p>
        </div>`);
  }

  greet(mothername) {
    console.log(`Parent Welcome ${this.firstname} ${mothername}`);
  }

  get treat() {
    console.log("treat mesg");
  }
}

class Salary extends Person {
  constructor(age, loc, zipcode, inherit, prop) {
    super(age, loc, zipcode);
    console.log("Salary constructor...." + inherit);
    this.inheritedProp = prop;
  }

  greet(mname) {
    super.greet(mname);
    console.log(
      "this.pincode in subclass : ",
      this.pincode,
      this.inheritedProp
    );
  }
}

// let person = new Person(26, "Trichy", 639101)
// let person1 = new Person(25, "Thillai Nagar", 621211)
let person = new Salary(26, "Trichy", 639101, "Inherit text", "Props");
let person1 = new Salary(
  25,
  "Thillai Nagar",
  621211,
  "Inherit text for karthi",
  "Props"
);
person.display("Keerthi Details for further process");
person.greet("Amutha");
person1.display("Karthick Details for further process");
// person1.greet("Meena");
// person1.greet()
person.treat;


// Task 1. Calculating area of a rectangle, square and circle.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    let areaOfRectangle = this.width * this.height;
    console.log("Area of rectangle is: ", areaOfRectangle);
  }
}

class Square extends Rectangle {
  constructor(width, height, length) {
    super(width, height);
    this.sideLength = length;
  }
  getArea() {
    super.getArea();
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

// let rect = new Rectangle(20, 10);
// rect.getArea();
let square = new Square(20, 10, 8);
square.getArea();
let circle = new Circle();
console.group("Area of a circle", circle.area);
Circle.diameter = 24.44;
console.log(Circle.diameter);


//Example 2
class Example {
  name = "keerthivasan";
  age = 26;
  print() {
    console.log("I'm " + this.name + " " + this.age + " years old");
    console.log("First number in print(): ", this.firstnumber);
  }
  greet() {
    console.log("Welcome " + this.name);
  }

  get ageCalc() {
    let x = 10;
    return [x, this.age];
  }

  set setAge(value) {
    this.age = value;
  }

  constructor(number1, number2) {
    console.log("base class contructor");
    console.log("First Number: ", number1);
    console.log("Second Number: ", number2);
    this.firstnumber = number1;
    this.secondnumber = number2;
    console.log(
      "Addition of two numbers : ",
      this.firstnumber + this.secondnumber
    );
  }
}

class Illustration extends Example {
  constructor(number1, number2) {
    super(number1, number2);
    console.log("derived class constructor");
  }
}

let ex = new Illustration(100, 200);
ex.print();
ex.greet();
console.log(
  "The person age is " +
    ex.ageCalc[1] +
    " and the value of x is: " +
    ex.ageCalc[0]
);
ex.setAge = "28";
ex.print();
