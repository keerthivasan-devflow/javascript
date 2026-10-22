function Office(name, location, employees, department) {
  this.name = name;
  this.location = location;
  this.employees = employees;
  this.department = department;
}

// When you call a function using the new keyword, it creates a new object and sets 'this'
// to refer to that newly created object inside the constructor function.
const tcs = new Office("Tata Consultancy Services", "Chennai", 5000, "HR");
const cts = new Office(
  "Cognizant Technology Solutions",
  "Bangalore",
  2400,
  "HR",
);

// Case 1: Instance Property - Add a new property to an object instance, such as 'tcs'.
tcs.branches = ["Chennai", "Hyderabad", "Pune", "Mysore"];

// Case 2: Prototype Property - Add a new property or method to the 'Office' prototype.
Office.prototype.industry = "IT Software Engineering";
Office.prototype.workingDays = "5 days";

console.log(tcs);
console.log(cts);
console.log(Object.getOwnPropertyNames(Function.prototype));

// Case 3: Static Property - Add a property or method directly to the 'Office' constructor function.
// Static properties and methods are accessible on the constructor, but are not inherited by its instances.
Office.isReopened = true;
console.log(Office.isReopened); // true
console.log(p1.isReopened); // undefined
console.log(p2.isReopened); // undefined

// Case 4: Important Note - Arrow Function as a Constructor Function.
// This code throws a TypeError because arrow functions cannot be used as constructor functions with the 'new' keyword.
const Office = (name, location, employees, department) => {
  this.name = name;
  this.location = location;
  this.employees = employees;
  this.department = department;
};

const tcs = new Office("Tata Consultancy Services", "Chennai", 5000, "HR");
console.log(tcs);

// Frequently Asked Interview Questions
// 1. Why does constructor: Office appear?
// The constructor function has its own prototype object, instances created with 'new' keyword
// inherit from that object, and that prototype object inherits from Object.prototype by default.
// tcs (object) → Office.prototype → Object.prototype. This is actual prototype chain of this example.

// Note: This applies to normal constructor functions used with 'new keyword'.
// Arrow functions do not have their own prototype property.

// 2. What is the difference between an object vs prototype object (Inheritance)?
// 3. How does a constructor function return an object without an explicit return statement?
