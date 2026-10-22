// Function Borrowing or Method Borrowing - This is a powerful tool for reusing methods across objects without inheritance.
// Use it when you need quick reuse of functionality but be cautious about readability and long-term maintainability.

// Risks & Considerations
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

// Example 1: Implicit Binding [Object Methods]
// When a function is called as a method of an object. The method will be invoked via object context like book.getTitle().
console.log(book.getTitle());

let bookTitle = book.getTitle;

// When a function is called without an object context, it is a standalone traditional function call.
// Notice that → Traditional Function - 'this' keyword
// 1. Non-strict mode - Window Global Object (Browser)
// 2. Strict mode - globalThis Object (Node Environment)
// This type of context has no title property in the global scope in this example.
// Therefore, this.title evaluates to undefined.
// this.title = "Python Programming"; // If a global 'title' property exists, its value will be displayed as the output.
console.log(bookTitle());

// Example 2: Explicit Binding - call() vs apply() vs bind()
// You can force a function to use a specific object as this by utilizing built-in utility methods in JS.
// The first argument passed to these methods must be an object you want 'this' to refer to.
let laptop = {
  brand: "Samsung",
  model: "Galaxy Book6 360",
  display: function (price, country) {
    return `${this.brand} ${this.model} costs ₹${price} and is available in ${country}.`;
  },
};

let smartphone = {
  brand: "Apple",
  model: "iphone 17 pro",
};

const LaptopInfo = laptop.display(60000, "India");
// In this example, call() lets you reuse the display() method from 'laptop' with the properties of 'smartphone'.
// Notice that the display() method still belongs to 'laptop', but 'this' keyword refers to 'smartphone' during the second call.
// The method is reused without copying it into 'smartphone'.
const SmartphoneInfo = laptop.display.call(smartphone, 80000, "France");

console.log(LaptopInfo);
console.log(SmartphoneInfo);

// Example 3: Constructor Binding
// When a function is invoked with the 'new' keyword, it creates an empty object in the background.
// Inside that constructor or class, this points to that newly created instance.
class Flower {
  constructor(name) {
    this.name = name;
  }
}
const member = new Flower("Sunflower");

// Example 4: Default Binding - Standalone Functions
// If a regular function is called completely on its own, this falls back to the GEC.
// Non-strict mode: Refers to window (in browsers) or globalThis (in Node.js).
// Strict mode: Refer to undefined to prevent accidental modifications to global variables.
