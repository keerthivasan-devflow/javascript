// Topic: Function Borrowing
// Function borrowing is a powerful tool for reusing methods across objects without inheritance. Use it when
// you need quick reuse of functionality but be cautious about readability and long-term maintainability.

// Topic: Risks & Considerations
// 1. Performance: Overusing borrowed functions may reduce clarity and efficiency.
// 2. Context confusion: Misuse of this can lead to bugs.
// 3. Maintainability: Borrowing across many objects can make code harder to follow compared to inheritance or composition.

let book = {
  title: "JavaScript Basics",
  author: "John Doe",
  pages: 200,
  getTitle() {
    return this.title;
  },
};

// Example 1: Implicit Binding(Object Methods) - When a function is called as a method of an object.
// Note: Here a method invoked via object context like book.getTitle().
console.log(book.getTitle());

let bookTitle = book.getTitle;
// Note: When a function is called w/o an object context [Actually there's no object before the dot]
// which means the function is executed in the default context so 'this' points out to the window vs globalThis object.
console.log(bookTitle());

// Example 2: Explicit Binding - You can force a function to use a specific object as this by utilizing built-in utility methods in JS.
// call() vs apply() - Function Borrowing | Method Borrowing
// call() is used to explicitly set the value of the this keyword.
// The first argument passed to call() must be the object you want this to refer to
let person1 = {
  firstname: "Lakshashree",
  lastname: "Sagayaraja",
  display: function (age, location) {
    return `${this.firstname} ${this.lastname} and their age is ${age} and city is ${location}`;
  },
};

let person2 = {
  firstname: "Parvesh",
  lastname: "Sagayaraja",
};

const result1 = person1.display(5, "Chennai");
const result2 = person1.display.call(person2, 18, "Trichy");
const result3 = person1.display.apply(person2, [26, "Salem"]);
const result4 = person1.display.bind(person2, 20, "Erode");

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4());

// Example 3: new Binding (Classes / Constructors)
// When a function is invoked with the new keyword, JavaScript creates an empty object in the background.
// Inside that constructor or class, this points to that newly created instance.
class Person {
  constructor(name) {
    this.name = name; // 'this' points to the new object instance of member
  }
}
const member = new Person("Charlie");

// Example 4: Default Binding (Standalone Functions)
// If a regular function is called completely on its own, this falls back to the global execution context.
// Non-strict mode: Refers to window (in browsers) or globalThis (in Node.js).
// Strict mode: Evaluates to undefined to prevent accidental modifications to global variables.
