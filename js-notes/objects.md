## Garbage Object

A garbage object in JavaScript refers to an object that no longer has any references pointing to it. Objects are retained in memory as long as there is a reference to them. Once all references to an object are removed, it is considered garbage and will be automatically deleted.

## Constructor Function

- It's a function that act as a pattern or template for creating objects.
- It instantiates the object and implements inheritance.
- A constructor function can be defined as a regular function or a function expression.

- What does the new() operator do in that context?
- **Important points to remember**:
- 1.  The 'new' keyword creates a fresh empty object (person1).
- 2.  Inside the constructor, 'this' is bound to that newly created object.
- 3.  The constructor implicitly returns 'this', so we don’t need to write 'return this' explicitly.

## Prototypal Inheritance

- In general, prototype is a mechanism through which inheritance is achieved in javascript.
- Prototypal inheritance refers to when an object gains access to the properties and methods of another object.
- Every object in JavaScript has a prototype property.
- Inheritance in JavaScript is accomplished through this prototype property.
- When we create an object in JavaScript, certain properties and methods are automatically added to the object through this prototype mechanism.

## Pass By Value | Pass By Reference

- A single object can have multiple references also in javascript.
- Reference variable - a variable which stores the addresses of an object.