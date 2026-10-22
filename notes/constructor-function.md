## Constructor Function

- It's a function that act as a pattern or template for creating an object.
- It instantiates the object and implements inheritance.
- A constructor function can be defined using a function declaration or a function expression, but not an arrow function, because arrow functions do not have their own `[[Construct]]` internal method.
  - In JavaScript, `[[Construct]]` is an internal operation that allows a function to be called with
    the 'new' keyword to create and initialize a new object.
  - It is an internal specification mechanism, not a property you normally access directly in your code.

## When you use `new Office("Tata Consultancy Services", "Chennai", 5000, "HR")` → javascript does the following automatically

1. Creates a new empty object.
2. Links the new object's prototype to Office.prototype.
3. Calls Office with 'this' referring to the new object.
4. The constructor implicitly returns 'this', so we don’t need to write 'return this' explicitly.

## Prototypal Inheritance

- Prototype is a mechanism (and also a property) through which inheritance is achieved in javascript.
- Prototypal Inheritance refers to when an object gains access to the properties and methods of another object.
- Every object has a prototype property in javascript.
- When we create an object, certain properties and methods are automatically added to the object through this prototype mechanism.
